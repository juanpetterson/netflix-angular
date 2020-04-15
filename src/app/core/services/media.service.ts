import { Injectable } from '@angular/core';
import { Media } from '../../models/media';
import { Observable, of } from 'rxjs';
// import medias from '../../medias';
import medias from '../../../assets/data/medias.json';

@Injectable({ providedIn: 'root' })
export class MediaService {
  // medias = JSON.parse(mediasJson);
  public constructor() {}

  public getMediasAsync(): Observable<Media[]> {
    return of(medias);
  }

  public getMedia(mediaId: number): any {
    return medias.find((media) => media.id === mediaId);
  }

  public getMedias(mediasIds: number[]) {
    return medias.filter((media) => mediasIds.includes(media.id));
  }

  public getMediasOriginals() {
    return medias.filter((media) => media.originals);
  }

  public getBillboardMedia(): any {
    return medias.find((media) => media.title === 'Money Heist');
  }
}
