import { TestBed } from '@angular/core/testing';

import { MediaStateService } from './media-state.service';

describe('MediaStateService', () => {
  let service: MediaStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
