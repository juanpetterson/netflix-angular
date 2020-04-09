import { Injectable } from '@angular/core';
import { Media } from '../../../models/media';
import { MediaApiClient } from 'api/media/media-api-client';
import { MediaAdapter } from '../../../models/media-adapter';
import { Observable, of } from 'rxjs';
import { map, tap, filter, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MediaService {
  public constructor(
    private readonly mediaApiClient: MediaApiClient,
    private readonly mediaAdapter: MediaAdapter
  ) {}

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
