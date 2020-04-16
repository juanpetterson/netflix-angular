import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSliderDetailsComponent } from './media-slider-details.component';

describe('MediaSliderDetailsComponent', () => {
  let component: MediaSliderDetailsComponent;
  let fixture: ComponentFixture<MediaSliderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaSliderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSliderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
