import { TestBed } from '@angular/core/testing';

import { MediaStorageService } from './media-storage.service';

describe('MediaStorageService', () => {
  let service: MediaStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
