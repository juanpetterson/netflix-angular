import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
  Output,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-watch-player-controls',
  templateUrl: './watch-player-controls.component.html',
  styleUrls: ['./watch-player-controls.component.scss'],
})
export class WatchPlayerControlsComponent implements OnInit {
  @Output() playing: EventEmitter<any> = new EventEmitter();
  @Output() seeking: EventEmitter<number> = new EventEmitter<number>();

  paused = false;
  muted = false;
  expanded = false;

  constructor() {}

  ngOnInit(): void {}

  onPlayPause() {
    this.playing.next(null);
    this.paused = !this.paused;
  }

  onSeekBack() {
    this.seeking.next(-10);
  }

  onSeekForward() {
    this.seeking.next(10);
  }
}
