import { Component, OnInit, OnDestroy } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs';
import { MediaService } from '../../core/services/media.service';
import { Media } from 'app/models/media';
import { MediaStorageService } from 'app/components/watch-player/services/media-storage.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-media-browser-page',
  templateUrl: './media-browser-page.component.html',
  styleUrls: ['./media-browser-page.component.scss'],
})
export class MediaBrowserPageComponent implements OnInit {
  // medias$ = new BehaviorSubject<Media[]>([]);
  medias: Media[];
  myMedias: Media[];
  mediasOriginals: Media[];
  billboardMedia: Media;

  constructor(
    private mediaService: MediaService,
    private storageService: MediaStorageService
  ) {}

  ngOnInit(): void {
    this.loadMedias();
  }

  private loadMedias(): void {
    this.billboardMedia = this.mediaService.getBillboardMedia();
    this.medias = this.mediaService.getMedias();
    this.myMedias = this.storageService.getStoredMedias();
    this.mediasOriginals = this.mediaService.getMediasOriginals();
  }
}
