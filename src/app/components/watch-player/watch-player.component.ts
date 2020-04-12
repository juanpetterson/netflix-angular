import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime, delay } from 'rxjs/operators';
import { Media } from 'app/models/media';
import {
  MediaState,
  EVENT_PLAY,
  EVENT_MUTE,
  EVENT_SEEKBACK,
  EVENT_SEEKFORWARD,
  EVENT_FULLSCREEN,
  EVENT_PAUSE,
  EVENT_UNMUTE,
  EVENT_FULLSCREEN_EXIT,
} from './models/media-state';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MediaService } from 'app/pages/media-browser-page/services/media.service';
import { MediaStateService } from './services/media-state.service';

@Component({
  selector: 'app-watch-player',
  templateUrl: './watch-player.component.html',
  styleUrls: ['./watch-player.component.scss'],
})
export class WatchPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('player') playerEl: ElementRef;
  @ViewChild('footer') footerEl: ElementRef;
  @ViewChild('headerIcon') headerIconEl: ElementRef;
  public media: Media;
  public progress = 0;
  public loading = true;
  private mediaState: MediaState;
  private subscriptions: Subscription[] = [];
  private player: HTMLVideoElement;

  constructor(
    private mediaService: MediaService,
    private mediaStateService: MediaStateService,
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

    this.subscriptions.push(
      this.mediaStateService.mediaStateChanged.subscribe((state) => {
        this.mediaState = state;
        this.mediaState.title = this.media.title;
      })
    );

    this.subscriptions.push(
      this.mediaStateService.mediaStateEvent.subscribe((stateEvent) => {
        this.onMediaStateChange(stateEvent);
      })
    );

    this.subscriptions.push(
      fromEvent(document, 'fullscreenchange').subscribe((_) => {
        if (!document.fullscreenElement) {
          this.mediaState.expanded = false;
        }
      })
    );
  }

  ngAfterViewInit(): void {
    this.player = this.playerEl.nativeElement;

    this.subscriptions.push(
      fromEvent(this.player, 'timeupdate')
        .pipe(throttleTime(500))
        .subscribe((event: Event) => {
          this.mediaState.currentTime = (event.target as HTMLVideoElement).currentTime;
          this.progress =
            (this.player.currentTime / this.player.duration) * 100;
          // setar no slider e no storage pelo mediaservice e por throttleTime no mediaservice
        })
    );
    this.subscriptions.push(
      fromEvent(this.player, 'ended').subscribe((_) => {
        this.mediaState.playing = false;
        this.progress = 100;
      })
    );
    this.subscriptions.push(
      fromEvent(this.player, 'canplay')
        .pipe(delay(2000))
        .subscribe((_) => {
          this.loading = false;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  showComponents(): void {
    this.footerEl.nativeElement.style.opacity = 1;
    this.footerEl.nativeElement.style.zIndex = '0';
    this.headerIconEl.nativeElement.style.opacity = 1;
    this.headerIconEl.nativeElement.style.zIndex = '0';
    this.player.style.cursor = 'default';
  }

  hideComponents(): void {
    this.footerEl.nativeElement.style.opacity = 0;
    this.headerIconEl.nativeElement.style.opacity = 0;
    this.player.style.cursor = 'none';

    setTimeout(() => {
      this.footerEl.nativeElement.style.zIndex = '-1';
      this.headerIconEl.nativeElement.style.zIndex = '-1';
    }, 500);
  }

  onMouseStop(): () => void {
    let thread;

    return () => {
      this.showComponents();
      clearTimeout(thread);
      thread = setTimeout(() => this.hideComponents(), 3000);
    };
  }

  onTogglePlaying(): void {
    if (!this.mediaState.playing) {
      this.mediaStateService.play();
    } else {
      this.mediaStateService.pause();
    }
  }

  onToggleFullscreen(): void {
    if (!this.mediaState.expanded) {
      this.mediaStateService.fullscreen();
    } else {
      this.mediaStateService.fullscreenExit();
    }
  }

  onProgressClick(event: MouseEvent) {
    this.progress = event.clientX / (event.target as HTMLElement).offsetWidth;
    this.mediaState.currentTime = this.player.duration * this.progress;
    this.player.currentTime = this.mediaState.currentTime;
    this.player.play();
  }

  onMediaStateChange(eventType: string) {
    switch (eventType) {
      case EVENT_PLAY:
        this.player.play();
        break;
      case EVENT_PAUSE:
        this.player.pause();
        break;
      case EVENT_SEEKBACK:
        this.player.currentTime -= 10;
        break;
      case EVENT_SEEKFORWARD:
        this.player.currentTime += 10;
        break;
      case EVENT_MUTE:
        this.player.muted = true;
        break;
      case EVENT_UNMUTE:
        this.player.muted = false;
        break;
      case EVENT_FULLSCREEN:
        document.documentElement.requestFullscreen();
        break;
      case EVENT_FULLSCREEN_EXIT:
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        break;
      default:
        break;
    }
  }
}
