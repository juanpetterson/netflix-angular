import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MediaState } from '../models/media-state';

@Component({
  selector: 'app-watch-player-controls',
  templateUrl: './watch-player-controls.component.html',
  styleUrls: ['./watch-player-controls.component.scss'],
})
export class WatchPlayerControlsComponent implements OnInit {
  @Output() mediaStateEvent = new EventEmitter<MediaState>();
  @Input() mediaState: MediaState;

  constructor() {}

  ngOnInit(): void {}

  onTogglePlaying() {
    this.mediaState.playing = !this.mediaState.playing;
    this.mediaState.eventType = 'Playing';
    this.mediaStateEvent.next(this.mediaState);
  }

  onSeekBack() {
    this.mediaState.seekTime = -10;
    this.mediaState.eventType = 'Seeking';
    this.mediaStateEvent.next(this.mediaState);
    this.mediaState.seekTime = 0;
  }

  onSeekForward() {
    this.mediaState.seekTime = 10;
    this.mediaState.eventType = 'Seeking';
    this.mediaStateEvent.next(this.mediaState);
    this.mediaState.seekTime = 0;
  }

  onMute() {
    this.mediaState.muted = !this.mediaState.muted;
    this.mediaState.eventType = 'Muting';
    this.mediaStateEvent.next(this.mediaState);
  }

  onToggleFullscreen() {
    this.mediaState.expanded = !this.mediaState.expanded;
    this.mediaState.eventType = 'Fullscreen';
    this.mediaStateEvent.next(this.mediaState);
  }

  onClickVideo() {
    this.onTogglePlaying();
  }
}
