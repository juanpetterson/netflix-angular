import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { Media } from 'app/models/media';
import { MediaState } from './models/media-state';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MediaService } from 'app/pages/media-browser-page/services/media.service';

@Component({
  selector: 'app-watch-player',
  templateUrl: './watch-player.component.html',
  styleUrls: ['./watch-player.component.scss'],
})
export class WatchPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('player') playerEl: ElementRef;
  private subscriptions: Subscription[] = [];
  private player: HTMLVideoElement;
  public media: Media;
  public mediaState: MediaState = {
    playing: false,
    muted: false,
    expanded: false,
    currentTime: 0,
    seekTime: 0,
    error: false,
  };

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const mediaId = +params.id;
      this.media = this.mediaService.getMedia(mediaId);

      if (!this.media) {
        this.router.navigate(['/not-found']);
      }
    });
  }

  ngAfterViewInit() {
    this.player = this.playerEl.nativeElement;
    this.subscriptions.push(
      fromEvent(this.player, 'timeupdate')
        .pipe(throttleTime(2000))
        .subscribe((event: Event) => {
          this.mediaState.currentTime = (event.target as HTMLVideoElement).currentTime;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  onPlayPause() {
    if (this.mediaState.playing) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  onExpandCompress() {
    if (this.mediaState.expanded) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  onClickVideo() {
    this.mediaState.playing = !this.mediaState.playing;
  }

  onMediaStateChange(mediaState: MediaState) {
    this.mediaState = mediaState;
    this.player.muted = mediaState.muted;
    this.player.currentTime += mediaState.seekTime;
    this.onExpandCompress();
    this.onPlayPause();
  }
}
