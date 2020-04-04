import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBrowserPageComponent } from './media-browser-page.component';

describe('MediaBrowserPageComponent', () => {
  let component: MediaBrowserPageComponent;
  let fixture: ComponentFixture<MediaBrowserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaBrowserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaBrowserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
