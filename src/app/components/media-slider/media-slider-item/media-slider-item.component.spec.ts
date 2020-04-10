import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSliderItemComponent } from './media-slider-item.component';

describe('MediaSliderItemComponent', () => {
  let component: MediaSliderItemComponent;
  let fixture: ComponentFixture<MediaSliderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaSliderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
