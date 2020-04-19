import { TestBed } from '@angular/core/testing';

import { MediaStateService } from './media-state.service';
import { MediaState } from '../models/media-state';

fdescribe('MediaStateService', () => {
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

  it('should have the media state playing changed', () => {
    service.play();
    expect(service.mediaStateChanged.value.playing).toBeTruthy();
  });

  it('should have the initial state when reset is called', () => {
    service.play();
    service.mute();

    service.reset();
    expect(service.mediaStateChanged.value).toEqual(service.initialState);
  });
});
