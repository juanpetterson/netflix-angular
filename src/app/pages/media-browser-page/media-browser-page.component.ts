import { Component, OnInit, OnDestroy } from '@angular/core';

import { MediaGroup } from '../../models/media-group';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MediaService } from './services/media.service';
import { Media } from 'app/models/media';

@Component({
  selector: 'app-media-browser-page',
  templateUrl: './media-browser-page.component.html',
  styleUrls: ['./media-browser-page.component.scss'],
})
export class MediaBrowserPageComponent implements OnInit, OnDestroy {
  public medias = new BehaviorSubject<MediaGroup[]>([]);
  subscription: Subscription;
  billboardMedia: Media;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    // this.mediaService.getMediasAsync().then((response) => {
    //   console.log(response);
    //   const indexed = new Map<string, Media[]>();
    //   response.forEach((media) => {
    //     let medias: Media[];
    //     if (!indexed.has(media.title)) {
    //       medias = new Array<Media>();
    //       indexed.set(media.title, medias);
    //     }
    //     medias = indexed[media.title];
    //     medias.push(media);
    //   });
    //   const result = new Array<MediaGroup>();
    //   indexed.forEach((value, key) => {
    //     const mediaGroup = new MediaGroup();
    //     mediaGroup.name = key;
    //     mediaGroup.medias = value;
    //     result.push(mediaGroup);
    //   });
    //   this.medias.next(result);
    // });

    this.subscription = this.mediaService
      .getMediasAsync()
      .subscribe((response) => {
        const result = new Array<MediaGroup>();

        response.forEach((media) => {
          const mediaGroup = new MediaGroup();
          mediaGroup.name = media.title;
          mediaGroup.medias = response;
          while (result.length < 5) {
            result.push(mediaGroup);
          }
        });

        this.medias.next(result);
      });

    this.loadBillboardMedia();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private loadBillboardMedia(): void {
    this.billboardMedia = this.mediaService.getBillboardMedia();
  }
}
