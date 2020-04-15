import { Injectable } from '@angular/core';
import { Storage } from '../../../core/store';
import { MediaState } from '../models/media-state';
import { MediaService } from 'app/core/services/media.service';
import { AuthService } from 'app/core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MediaStorageService {
  private store = new Storage('@netflix');

  constructor(
    private mediaService: MediaService,
    private authService: AuthService
  ) {}

  getStoredMedias() {
    const loggedUser = this.authService.getLoggedUser();
    const userMedias = this.store.get(loggedUser.email) || [];

    const storedMedias = userMedias.map((media) => {
      return this.mediaService.getMedia(media.mediaId);
    });

    return storedMedias.reverse();
  }

  getStoredMedia(mediaId: number) {
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

    const storedMedia = userMedias.find((media) => {
      return media.mediaId === mediaState.id;
    });

    if (storedMedia) {
      storedMedia.currentTime = mediaState.currentTime;
    } else {
      const userMedia = {
        mediaId: mediaState.id,
        currentTime: mediaState.currentTime,
      };
      userMedias.push(userMedia);
    }
    this.store.set(loggedUser.email, userMedias);
  }
}
