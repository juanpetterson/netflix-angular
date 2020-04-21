import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchPlayerControlsComponent } from './watch-player-controls.component';

fdescribe('WatchPlayerControlsComponent', () => {
  let component: WatchPlayerControlsComponent;
  let fixture: ComponentFixture<WatchPlayerControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WatchPlayerControlsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchPlayerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
