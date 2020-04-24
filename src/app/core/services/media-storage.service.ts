import { Injectable } from '@angular/core';
import { MediaState } from '../../components/watch-player/models/media-state';
import { MediaService } from '../../core/services/media.service';
import { Media } from '../../shared/models/media';
import { StoredMedia } from '../../shared/models/stored-media';
import { Storage } from '../store';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MediaStorageService {
  private store = new Storage('@netflix');

  constructor(
    private mediaService: MediaService,
    private authService: AuthService
  ) {}

  public getStoredMedias(lastMediasCount: number = 0): Media[] {
    const loggedUser = this.authService.isAuthenticated$.value;
    const userMedias = this.store.get(loggedUser.email) || [];

    let storedMedias = userMedias
      .sort((m1: StoredMedia, m2: StoredMedia) => {
        return m2.updatedAt - m1.updatedAt;
      })
      .map((media) => {
        let storedMedia: Media;

        this.mediaService.getMedia(media.mediaId).subscribe((resMedia) => {
          storedMedia = resMedia;
        });

        return storedMedia;
      });

    if (lastMediasCount) {
      storedMedias = storedMedias.slice(0, lastMediasCount);
    }

    return storedMedias;
  }

  public getStoredMedia(mediaId: number): StoredMedia {
    const loggedUser = this.authService.isAuthenticated$.value;
    const userMedias = this.store.get(loggedUser.email) || [];

    const storedMedia = userMedias.find((media) => {
      return media.mediaId === mediaId;
    });

    return storedMedia;
  }

  public updateStoredMedias(mediaState: MediaState): void {
    const loggedUser = this.authService.isAuthenticated$.value;
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
