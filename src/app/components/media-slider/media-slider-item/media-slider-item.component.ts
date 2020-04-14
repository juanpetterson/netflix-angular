import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Media } from 'app/models/media';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-slider-item',
  templateUrl: './media-slider-item.component.html',
  styleUrls: ['./media-slider-item.component.scss'],
})
export class MediaSliderItemComponent implements OnInit, OnChanges {
  @Output() activeMediaChange = new EventEmitter<Media>();
  @Input() media: Media;
  @Input() activeMedia: Media;
  @Input() isOriginals: boolean;
  active: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.active = this.activeMedia && this.activeMedia.id === this.media.id;
  }

  onPlayMedia() {
    this.router.navigate(['/watch', this.media.id]);
  }

  onShowDetails(): void {
    this.activeMediaChange.next(this.media);
  }
}
