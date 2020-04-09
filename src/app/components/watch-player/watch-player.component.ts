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

@Component({
  selector: 'app-watch-player',
  templateUrl: './watch-player.component.html',
  styleUrls: ['./watch-player.component.scss'],
})
export class WatchPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('player') player: ElementRef;
  @Input() media: Media;
  public paused = true;
  public muted = false;
  public expanded = false;
  private subscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.subscriptions.push(
      fromEvent(this.player.nativeElement, 'pause').subscribe((response) => {
        this.paused = true;
      })
    );
    this.subscriptions.push(
      fromEvent(this.player.nativeElement, 'play').subscribe((response) => {
        this.paused = false;
      })
    );
    this.subscriptions.push(
      fromEvent(this.player.nativeElement, 'timeupdate')
        .pipe(throttleTime(2000))
        .subscribe((event: Event) => {
          console.dir(event.target);
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  onPlayPause() {
    if (this.paused) {
      this.player.nativeElement.play();
      this.paused = false;
    } else {
      this.player.nativeElement.pause();
      this.paused = true;
    }
  }

  onClickVideo() {
    this.onPlayPause();
  }

  onSeekBack() {
    this.player.nativeElement.currentTime -= 10;
  }

  onSeekForward() {
    this.player.nativeElement.currentTime += 10;
  }

  onPlaying(event) {
    this.onPlayPause();
  }
  onSeeking(event) {
    this.player.nativeElement.currentTime += event;
  }
}
