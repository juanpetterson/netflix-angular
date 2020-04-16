import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import {
  MediaState,
  EVENT_PLAY,
  EVENT_MUTE,
  EVENT_SEEKBACK,
  EVENT_SEEKFORWARD,
  EVENT_FULLSCREEN,
  EVENT_FULLSCREEN_EXIT,
  EVENT_PAUSE,
  EVENT_UNMUTE,
} from '../models/media-state';

@Injectable({
  providedIn: 'root',
})
export class MediaStateService {
  private mediaState: MediaState = {
    id: 0,
    title: '',
    playing: false,
    muted: false,
    expanded: false,
    duration: 0,
    currentTime: 0,
  };

  mediaStateChanged = new BehaviorSubject<MediaState>(this.mediaState);
  mediaStateEvent = new Subject<string>();

  constructor() {}

  play(): void {
    this.mediaState.playing = true;
    this.mediaStateChanged.next(this.mediaState);
    this.mediaStateEvent.next(EVENT_PLAY);
  }

  pause(): void {
    this.mediaState.playing = false;
    this.mediaStateChanged.next(this.mediaState);
    this.mediaStateEvent.next(EVENT_PAUSE);
  }

  mute(): void {
    this.mediaState.muted = true;
    this.mediaStateChanged.next(this.mediaState);
    this.mediaStateEvent.next(EVENT_MUTE);
  }

  unmute(): void {
    this.mediaState.muted = false;
    this.mediaStateChanged.next(this.mediaState);
    this.mediaStateEvent.next(EVENT_UNMUTE);
  }

  seekBack(): void {
    this.mediaState.currentTime -= 10;
    this.mediaStateChanged.next(this.mediaState);
    this.mediaStateEvent.next(EVENT_SEEKBACK);
  }

  seekForward(): void {
    this.mediaState.currentTime += 10;
    this.mediaStateChanged.next(this.mediaState);
    this.mediaStateEvent.next(EVENT_SEEKFORWARD);
  }

  fullscreen(): void {
    this.mediaState.expanded = true;
    this.mediaStateChanged.next(this.mediaState);
    this.mediaStateEvent.next(EVENT_FULLSCREEN);
  }

  fullscreenExit(): void {
    this.mediaState.expanded = false;
    this.mediaStateChanged.next(this.mediaState);
    this.mediaStateEvent.next(EVENT_FULLSCREEN_EXIT);
  }
}
