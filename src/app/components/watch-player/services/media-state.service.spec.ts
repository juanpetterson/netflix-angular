import { TestBed } from '@angular/core/testing';
import { MediaStateService } from './media-state.service';
import {
  EVENT_PLAY,
  EVENT_MUTE,
  EVENT_SEEKBACK,
  EVENT_SEEKFORWARD,
  EVENT_FULLSCREEN,
  EVENT_FULLSCREEN_EXIT,
  EVENT_PAUSE,
  EVENT_UNMUTE,
  EVENT_RESET,
} from '../models/media-state';

describe('MediaStateService', () => {
  let service: MediaStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the initial state', () => {
    expect(service.mediaStateChanged.value).toEqual(service.initialState);
  });

  it('should have the playing state equal to true when play is called and emmited the change event', () => {
    spyOn(service.mediaStateEvent, 'next');
    spyOn(service.mediaStateChanged, 'next');

    service.play();
    expect(service.mediaStateChanged.value.playing).toBeTruthy();

    expect(service.mediaStateEvent.next).toHaveBeenCalledWith(EVENT_PLAY);
    expect(service.mediaStateChanged.next).toHaveBeenCalled();
  });

  it('should have the playing state equal to false when pause is called and emmited the change event', () => {
    spyOn(service.mediaStateEvent, 'next');
    spyOn(service.mediaStateChanged, 'next');

    service.pause();
    expect(service.mediaStateChanged.value.playing).toBeFalsy();

    expect(service.mediaStateEvent.next).toHaveBeenCalledWith(EVENT_PAUSE);
    expect(service.mediaStateChanged.next).toHaveBeenCalled();
  });

  it('should have the muted state equal to true when mute is called and emmited the change event', () => {
    spyOn(service.mediaStateEvent, 'next');
    spyOn(service.mediaStateChanged, 'next');

    service.mute();
    expect(service.mediaStateChanged.value.muted).toBeTruthy();

    expect(service.mediaStateEvent.next).toHaveBeenCalledWith(EVENT_MUTE);
    expect(service.mediaStateChanged.next).toHaveBeenCalled();
  });

  it('should have the muted state equal to false when unmute is called and emmited the change event', () => {
    spyOn(service.mediaStateEvent, 'next');
    spyOn(service.mediaStateChanged, 'next');

    service.unmute();
    expect(service.mediaStateChanged.value.muted).toBeFalsy();

    expect(service.mediaStateEvent.next).toHaveBeenCalledWith(EVENT_UNMUTE);
    expect(service.mediaStateChanged.next).toHaveBeenCalled();
  });

  it('should have the fullscreen state equal to true when fullscreen is called and emmited the change event', () => {
    spyOn(service.mediaStateEvent, 'next');
    spyOn(service.mediaStateChanged, 'next');

    service.fullscreen();
    expect(service.mediaStateChanged.value.fullscreen).toBeTruthy();

    expect(service.mediaStateEvent.next).toHaveBeenCalledWith(EVENT_FULLSCREEN);
    expect(service.mediaStateChanged.next).toHaveBeenCalled();
  });

  it('should have the fullscreen state equal to false when fullscreenExit is called and emmited the change event', () => {
    spyOn(service.mediaStateEvent, 'next');
    spyOn(service.mediaStateChanged, 'next');

    service.fullscreenExit();
    expect(service.mediaStateChanged.value.fullscreen).toBeFalsy();

    expect(service.mediaStateEvent.next).toHaveBeenCalledWith(
      EVENT_FULLSCREEN_EXIT
    );
    expect(service.mediaStateChanged.next).toHaveBeenCalled();
  });

  it('should have the currentTime state 10s back when seekBack is called and emmited the change event', () => {
    spyOn(service.mediaStateEvent, 'next');
    spyOn(service.mediaStateChanged, 'next');

    service.seekBack();
    expect(service.mediaStateChanged.value.currentTime).toEqual(
      service.initialState.currentTime - 10
    );

    expect(service.mediaStateEvent.next).toHaveBeenCalledWith(EVENT_SEEKBACK);
    expect(service.mediaStateChanged.next).toHaveBeenCalled();
  });

  it('should have the currentTime state 10s forward when seekForward is called and emmited the change event', () => {
    spyOn(service.mediaStateEvent, 'next');
    spyOn(service.mediaStateChanged, 'next');

    service.seekForward();
    expect(service.mediaStateChanged.value.currentTime).toEqual(
      service.initialState.currentTime + 10
    );

    expect(service.mediaStateEvent.next).toHaveBeenCalledWith(
      EVENT_SEEKFORWARD
    );
    expect(service.mediaStateChanged.next).toHaveBeenCalled();
  });

  it('should have the initial state when reset is called', () => {
    spyOn(service.mediaStateEvent, 'next');
    spyOn(service.mediaStateChanged, 'next');

    service.play();
    service.mute();

    service.reset();

    expect(service.mediaStateChanged.value).toEqual(service.initialState);
    expect(service.mediaStateEvent.next).toHaveBeenCalledWith(EVENT_RESET);
    expect(service.mediaStateChanged.next).toHaveBeenCalled();
  });
});
