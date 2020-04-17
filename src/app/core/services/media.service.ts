import { Injectable } from '@angular/core';
import { Media } from '../../shared/models/media';
import medias from '../../../assets/data/medias';

@Injectable({ providedIn: 'root' })
export class MediaService {
  public constructor() {}

  public getMedias(): Media[] {
    return medias.sort(() => Math.random() - 0.5);
  }

  public getMedia(mediaId: number): Media {
    return medias.find((media) => media.id === mediaId);
  }

  public getMediasByIds(mediasIds: number[]) {
    return medias.filter((media) => mediasIds.includes(media.id));
  }

  public getMediasOriginals() {
    return medias.filter((media) => media.originals);
  }

  public getBillboardMedia(): Media {
    return medias[Math.floor(Math.random() * medias.length)];
  }
}
