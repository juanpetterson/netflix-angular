import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
      providers: [AuthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show the logged user avatar when logged', () => {
    const user = {
      id: 1,
      name: '',
      email: '',
      password: '',
      avatar: 'assets/profile1.png',
      plan: '',
      creditCard: '',
    };

    component.loggedUser = user;
    fixture.detectChanges();

    const imageEl = de.query(By.css('.header__action-avatar'));
    expect(imageEl.nativeElement.src).toContain(user.avatar);
  });

  it('Should dont show the header navigation when user not logged', () => {
    const navigationEl = de.query(By.css('.header__navigation'));
    expect(navigationEl).toBeFalsy();
  });

  it('Should header has the correct class based on the backgroundColor - Transparent', () => {
    component.backgroundColor = 'transparent';
    component.ngAfterViewInit();
    fixture.detectChanges();

    const navigationEl = de.query(By.css('.header'));
    const headerClassList = navigationEl.nativeElement.classList;
    expect(headerClassList).toContain('header--transparent');
  });

  it('Should header has the correct class based on the backgroundColor - Dark', () => {
    component.backgroundColor = 'dark';
    component.ngAfterViewInit();
    fixture.detectChanges();

    const navigationEl = de.query(By.css('.header'));
    const headerClassList = navigationEl.nativeElement.classList;
    expect(headerClassList).toContain('header--dark');
  });

  it('Should header has the correct class based on the backgroundColor - Black', () => {
    component.backgroundColor = 'black';
    component.ngAfterViewInit();
    fixture.detectChanges();

    const navigationEl = de.query(By.css('.header'));
    const headerClassList = navigationEl.nativeElement.classList;
    expect(headerClassList).toContain('header--black');
  });
});
