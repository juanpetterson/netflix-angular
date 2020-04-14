import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MediaState } from '../models/media-state';
import { MediaStateService } from '../services/media-state.service';
import { Media } from 'app/models/media';

@Component({
  selector: 'app-watch-player-controls',
  templateUrl: './watch-player-controls.component.html',
  styleUrls: ['./watch-player-controls.component.scss'],
})
export class WatchPlayerControlsComponent implements OnInit {
  @Output() mediaStateEvent = new EventEmitter<string>();
  @Input() media: Media;
  mediaState: MediaState;

  constructor(private mediaStateService: MediaStateService) {}

  ngOnInit(): void {
    this.mediaStateService.mediaStateChanged.subscribe((state) => {
      this.mediaState = state;
    });
  }

  onTogglePlaying() {
    if (this.mediaState.playing) {
      this.mediaStateService.pause();
    } else {
      this.mediaStateService.play();
    }
  }

  onSeekBack() {
    this.mediaStateService.seekBack();
  }

  onSeekForward() {
    this.mediaStateService.seekForward();
  }

  onToggleMute() {
    if (this.mediaState.muted) {
      this.mediaStateService.unmute();
    } else {
      this.mediaStateService.mute();
    }
  }

  onToggleFullscreen() {
    if (!this.mediaState.expanded) {
      this.mediaStateService.fullscreen();
    } else {
      this.mediaStateService.fullscreenExit();
    }
  }
}
