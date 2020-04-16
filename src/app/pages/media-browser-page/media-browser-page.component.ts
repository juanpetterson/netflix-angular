import { Component, OnInit } from '@angular/core';

import { MediaService } from '../../core/services/media.service';
import { Media } from 'app/models/media';
import { MediaStorageService } from 'app/core/services/media-storage.service';

@Component({
  selector: 'app-media-browser-page',
  templateUrl: './media-browser-page.component.html',
  styleUrls: ['./media-browser-page.component.scss'],
})
export class MediaBrowserPageComponent implements OnInit {
  public medias: Media[];
  public myMedias: Media[];
  public mediasOriginals: Media[];
  public billboardMedia: Media;

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
