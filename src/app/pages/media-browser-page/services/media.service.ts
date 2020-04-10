import { Injectable } from '@angular/core';
import { Media } from '../../../models/media';
import { MediaApiClient } from 'api/media/media-api-client';
import { MediaAdapter } from '../../../models/media-adapter';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MediaService {
  public constructor(
    private readonly mediaApiClient: MediaApiClient,
    private readonly mediaAdapter: MediaAdapter
  ) {}

  //criar media atual aqui e injetar o service onde for usado para nao impactar
  // quando abrir varias abas, testar varias abas com videos
  // controlar as medias pelo service e dai é possivel controlar o load tbm

  public getMediasAsync(): Observable<Media[]> {
    return this.mediaApiClient.queryAsync().pipe(
      map((response) => {
        const result = response.map((media) => this.mediaAdapter.adapt(media));

        return result;
      })
    );
  }

  public getMedia(mediaId: number): Media {
    return this.mediaApiClient.getMedia(mediaId);
  }

  public getBillboardMedia(): Media {
    return this.mediaApiClient.getBillboardMedia();
  }
}
