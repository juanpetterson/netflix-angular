import { MediaResponse } from './models/media-response';
import { Injectable } from '@angular/core';
import medias from './medias';

@Injectable({ providedIn: 'root' })
export class MediaApiClient {
  public queryAsync(): Promise<MediaResponse[]> {
    return Promise.resolve(medias);
  }
}
