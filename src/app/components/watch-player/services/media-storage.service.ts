import { Injectable } from '@angular/core';
import { Storage } from '../../../core/store';
import { MediaState } from '../models/media-state';
import { MediaService } from 'app/core/services/media.service';

@Injectable({
  providedIn: 'root',
})
export class MediaStorageService {
  private store = new Storage('@netflix');

  constructor(private mediaService: MediaService) {}

  getStoredMedias() {
    const userMedias = this.store.get('userMedias');
    if (userMedias) {
      userMedias.map((media) => {
        return this.mediaService.getMedia(media.mediaId);
      });
    }

    return userMedias;
  }

  getStoredMedia(mediaId: number) {
    const userMedias = this.store.get('userMedias');

    const storedMedia = userMedias.find((media) => {
      return media.mediaId === mediaId;
    });

    return storedMedia;
  }

  updateStoredMedias(mediaState: MediaState): void {
    const userMedias = this.store.get('userMedias') || [];

    // console.log(userMedias);

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
    this.store.set('userMedias', userMedias);
  }
}
