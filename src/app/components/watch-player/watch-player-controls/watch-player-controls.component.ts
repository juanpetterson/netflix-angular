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
  public mediaState: MediaState;

  constructor(private mediaStateService: MediaStateService) {}

  ngOnInit(): void {
    this.mediaStateService.mediaStateChanged.subscribe((state) => {
      this.mediaState = state;
    });
  }

  onTogglePlaying(): void {
    if (this.mediaState.playing) {
      this.mediaStateService.pause();
    } else {
      this.mediaStateService.play();
    }
  }

  onSeekBack(): void {
    this.mediaStateService.seekBack();
  }

  onSeekForward(): void {
    this.mediaStateService.seekForward();
  }

  onToggleMute(): void {
    if (this.mediaState.muted) {
      this.mediaStateService.unmute();
    } else {
      this.mediaStateService.mute();
    }
  }

  onToggleFullscreen(): void {
    if (!this.mediaState.expanded) {
      this.mediaStateService.fullscreen();
    } else {
      this.mediaStateService.fullscreenExit();
    }
  }
}
