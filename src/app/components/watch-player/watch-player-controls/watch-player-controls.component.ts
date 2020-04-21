import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
} from '@angular/core';
import { MediaState } from '../models/media-state';
import { MediaStateService } from '../services/media-state.service';
import { Media } from 'app/shared/models/media';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-watch-player-controls',
  templateUrl: './watch-player-controls.component.html',
  styleUrls: ['./watch-player-controls.component.scss'],
})
export class WatchPlayerControlsComponent implements OnInit, OnDestroy {
  @Output() mediaStateEvent = new EventEmitter<string>();
  @Input() media: Media;
  public mediaState: MediaState;
  private subscription: Subscription;

  constructor(private mediaStateService: MediaStateService) {}

  ngOnInit(): void {
    this.subscription = this.mediaStateService.mediaStateChanged.subscribe(
      (state) => {
        this.mediaState = state;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
    if (!this.mediaState.fullscreen) {
      this.mediaStateService.fullscreen();
    } else {
      this.mediaStateService.fullscreenExit();
    }
  }
}
