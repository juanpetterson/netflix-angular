import { Component, OnInit, OnDestroy } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs';
import { MediaService } from '../../core/services/media.service';
import { Media } from 'app/models/media';
import { MediaStorageService } from 'app/components/watch-player/services/media-storage.service';

@Component({
  selector: 'app-media-browser-page',
  templateUrl: './media-browser-page.component.html',
  styleUrls: ['./media-browser-page.component.scss'],
})
export class MediaBrowserPageComponent implements OnInit, OnDestroy {
  // medias$ = new BehaviorSubject<Media[]>([]);
  medias: Media[];
  myMedias: Media[];
  subscription: Subscription;
  billboardMedia: Media;

  constructor(
    private mediaService: MediaService,
    private storageService: MediaStorageService
  ) {}

  ngOnInit(): void {
    this.subscription = this.mediaService
      .getMediasAsync()
      .subscribe((response) => {
        this.medias = response;
      });

    this.loadBillboardMedia();
    this.myMedias = this.storageService.getStoredMedias();

    console.log(this.myMedias);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private loadBillboardMedia(): void {
    this.billboardMedia = this.mediaService.getBillboardMedia();
  }
}
