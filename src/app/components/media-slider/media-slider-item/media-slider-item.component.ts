import { Component, OnInit, Input } from '@angular/core';
import { Media } from 'app/models/media';

@Component({
  selector: 'app-media-slider-item',
  templateUrl: './media-slider-item.component.html',
  styleUrls: ['./media-slider-item.component.scss'],
})
export class MediaSliderItemComponent implements OnInit {
  @Input() media: Media;

  constructor() {}

  ngOnInit(): void {}

  onPlayMedia(number) {}
}
