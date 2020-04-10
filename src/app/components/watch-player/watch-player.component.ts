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
  @ViewChild('footer') footerEl: ElementRef;
  @ViewChild('headerIcon') headerIconEl: ElementRef;
  public media: Media;
  public mediaState: MediaState = {
    title: '',
    playing: true,
    muted: true,
    expanded: false,
    duration: 0,
    currentTime: 0,
    seekTime: 0,
    error: false,
    eventType: undefined,
  };
  public progress = 0;
  public loading = true;
  private subscriptions: Subscription[] = [];
  private player: HTMLVideoElement;
  private userInteract = false;

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
      } else {
        this.mediaState.title = this.media.title;
      }
    });
  }

  ngAfterViewInit() {
    this.player = this.playerEl.nativeElement;
    this.player.onmousemove = this.onMouseStop();
    this.player.muted = true;

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
      fromEvent(this.player, 'canplay').subscribe((event) => {
        this.loading = false;
        this.player.play();
      })
    );
    this.subscriptions.push(
      fromEvent(this.player, 'mousemove').subscribe((_) => {
        this.userInteract = true;
        this.footerEl.nativeElement.style.opacity = 1;
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

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  onMouseStop() {
    const onMouseStop = () => {
      this.footerEl.nativeElement.style.opacity = 0;
      this.headerIconEl.nativeElement.style.opacity = 0;

      setTimeout(() => {
        this.footerEl.nativeElement.style.zIndex = '-1';
        this.headerIconEl.nativeElement.style.zIndex = '-1';
      }, 500);
      this.player.style.cursor = 'none';
    };

    let thread;

    return () => {
      this.footerEl.nativeElement.style.opacity = 1;
      this.footerEl.nativeElement.style.zIndex = '0';
      this.headerIconEl.nativeElement.style.opacity = 1;
      this.headerIconEl.nativeElement.style.zIndex = '0';
      this.player.style.cursor = 'default';
      clearTimeout(thread);
      thread = setTimeout(onMouseStop, 3000);
    };
  }

  onTogglePlaying() {
    if (this.mediaState.playing) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  onToggleFullscreen() {
    if (this.mediaState.expanded) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  onClickVideo() {
    this.mediaState.playing = !this.mediaState.playing;
    this.onTogglePlaying();
  }

  onProgressClick(event: MouseEvent) {
    this.progress = event.clientX / (event.target as HTMLElement).offsetWidth;
    this.mediaState.currentTime = this.player.duration * this.progress;
    this.player.currentTime = this.mediaState.currentTime;
    this.player.play();
  }

  onDoubleClickVideo() {
    this.mediaState.expanded = !this.mediaState.expanded;
    this.onToggleFullscreen();
  }

  onMediaStateChange(mediaState: MediaState) {
    this.mediaState = mediaState;

    switch (mediaState.eventType) {
      case 'Playing':
        this.onTogglePlaying();
        break;
      case 'Muting':
        this.player.muted = mediaState.muted;
        break;
      case 'Seeking':
        this.player.currentTime += mediaState.seekTime;
        break;
      case 'Fullscreen':
        this.onToggleFullscreen();
        break;
      default:
        break;
    }
  }
}
