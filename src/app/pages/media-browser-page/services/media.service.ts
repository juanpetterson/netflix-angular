import { Injectable } from '@angular/core';
import { Media } from '../../../models/media';
import { MediaApiClient } from 'api/media/media-api-client';
import { MediaAdapter } from '../../../models/media-adapter';

@Injectable({ providedIn: 'root' })
export class MediaService {
  public constructor(
    private readonly mediaApiClient: MediaApiClient,
    private readonly mediaAdapter: MediaAdapter
  ) {}

  public async getMediasAsync(): Promise<Media[]> {
    return this.mediaApiClient.queryAsync().then((response) => {
      const result = response.map((media) => this.mediaAdapter.adapt(media));

      return result;
    });
  }
}
