import { MediaResponse } from './models/media-response';
import { Injectable } from '@angular/core';
import medias from './medias';
import { Observable, of } from 'rxjs';
import { Media } from 'app/models/media';

@Injectable({ providedIn: 'root' })
export class MediaApiClient {
  public queryAsync(): Observable<MediaResponse[]> {
    return of(medias);
  }

  public getBillboardMedia(): Media {
    return medias.find((media) => media.title === 'Money Heist');
  }
}
