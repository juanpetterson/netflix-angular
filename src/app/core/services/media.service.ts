import { Injectable } from '@angular/core';
import { Media } from '../../shared/models/media';
import medias from '../../../assets/data/medias';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MediaService {
  public constructor() {}

  public getMedias(): Observable<Media[]> {
    return of(medias.sort(() => Math.random() - 0.5));
  }

  public getMedia(mediaId: number): Observable<Media> {
    return of(medias.find((media) => media.id === mediaId));
  }

  public getMediasByIds(mediasIds: number[]): Observable<Media[]> {
    return of(medias.filter((media) => mediasIds.includes(media.id)));
  }

  public getMediasOriginals(): Observable<Media[]> {
    return of(medias.filter((media) => media.originals));
  }

  public getBillboardMedia(): Observable<Media> {
    return of(medias[Math.floor(Math.random() * medias.length)]);
  }
}
