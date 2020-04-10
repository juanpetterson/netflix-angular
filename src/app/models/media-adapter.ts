import { Media } from './media';
import { MediaResponse } from 'api/media/models/media-response';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MediaAdapter {
  public adapt(response: MediaResponse): Media {
    const media = new Media();
    media.id = response.id;
    media.title = response.title;
    media.thumbnail = response.thumbnail;
    media.thumbnailLogo = response.thumbnailLogo;
    media.poster = response.poster;
    media.topPoster = response.topPoster;
    media.billboard = response.billboard;
    media.mediaPath = response.mediaPath;
    media.synopsis = response.synopsis;
    media.maturity = response.maturity;
    media.match = response.match;
    media.lastRelease = response.lastRelease;
    media.top10 = response.top10;
    media.originals = response.originals;
    media.duration = response.duration;
    media.starring = response.starring;
    media.genres = response.genres;
    media.tags = response.tags;

    return media;
  }
}
