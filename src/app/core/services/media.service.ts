import { Injectable } from '@angular/core';
import { Media } from '../../models/media';
import { Observable, of } from 'rxjs';
// import medias from '../../medias';
import medias from '../../../assets/data/medias.json';

@Injectable({ providedIn: 'root' })
export class MediaService {
  public constructor() {}

  public getMedias(): any {
    return medias.sort(() => Math.random() - 0.5);
  }

  public getMedia(mediaId: number): any {
    return medias.find((media) => media.id === mediaId);
  }

  public getMediasByIds(mediasIds: number[]) {
    return medias.filter((media) => mediasIds.includes(media.id));
  }

  public getMediasOriginals() {
    return medias.filter((media) => media.originals);
  }

  public getBillboardMedia(): any {
    return medias[Math.floor(Math.random() * medias.length)];
  }
}
