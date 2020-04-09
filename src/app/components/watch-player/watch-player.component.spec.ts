import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchPlayerComponent } from './watch-player.component';

describe('WatchPlayerComponent', () => {
  let component: WatchPlayerComponent;
  let fixture: ComponentFixture<WatchPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
