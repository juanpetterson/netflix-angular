import { Injectable } from '@angular/core';
import { Storage } from '../store';
import { MediaState } from '../../components/watch-player/models/media-state';
import { MediaService } from 'app/core/services/media.service';
import { AuthService } from 'app/core/services/auth.service';
import { StoredMedia } from '../../shared/models/stored-media';
import { Media } from 'app/shared/models/media';

@Injectable({
  providedIn: 'root',
})
export class MediaStorageService {
  private store = new Storage('@netflix');

  constructor(
    private mediaService: MediaService,
    private authService: AuthService
  ) {}

  getStoredMedias(lastMediasCount: number = 0): Media[] {
    const loggedUser = this.authService.getLoggedUser();
    const userMedias = this.store.get(loggedUser.email) || [];

    let storedMedias = userMedias
      .sort((m1: StoredMedia, m2: StoredMedia) => {
        return m2.updatedAt - m1.updatedAt;
      })
      .map((media) => {
        return this.mediaService.getMedia(media.mediaId);
      });

    if (lastMediasCount) {
      storedMedias = storedMedias.slice(0, lastMediasCount);
    }

    return storedMedias;
  }

  getStoredMedia(mediaId: number): StoredMedia {
    const loggedUser = this.authService.getLoggedUser();
    const userMedias = this.store.get(loggedUser.email) || [];

    const storedMedia = userMedias.find((media) => {
      return media.mediaId === mediaId;
    });

    return storedMedia;
  }

  updateStoredMedias(mediaState: MediaState): void {
    const loggedUser = this.authService.getLoggedUser();
    const userMedias = this.store.get(loggedUser.email) || [];

    const storedMedia: StoredMedia = userMedias.find((media: StoredMedia) => {
      return media.mediaId === mediaState.id;
    });

    if (storedMedia) {
      storedMedia.currentTime = mediaState.currentTime;
      storedMedia.updatedAt = new Date().getTime();
    } else {
      const userMedia: StoredMedia = {
        mediaId: mediaState.id,
        currentTime: mediaState.currentTime,
        updatedAt: new Date().getTime(),
      };
      userMedias.push(userMedia);
    }
    this.store.set(loggedUser.email, userMedias);
  }
}
