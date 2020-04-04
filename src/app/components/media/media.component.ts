import { Component, OnInit } from '@angular/core';
import { Media } from '../../models/media';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  public media: Media;

  constructor() {}

  ngOnInit(): void {}
}
