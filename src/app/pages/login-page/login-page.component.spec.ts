import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { AuthService } from 'app/core/services/auth.service';
import { DebugElement, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

export type Spied<T> = {
  [Method in keyof T]: jasmine.Spy;
};

@Component({
  selector: 'app-header',
  template: '',
})
class MockedHeaderComponent {}

fdescribe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let de: DebugElement;
  let authService: Spied<AuthService>;
  let router: Router;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['signIn']);

    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [{ provide: AuthService, useValue: authService }],
      declarations: [LoginPageComponent, MockedHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be invalid when empty', () => {
    expect(component.email.valid).toBeFalsy();
  });

  it('should validate inputs as required', () => {
    const email = component.form.controls.email;
    const password = component.form.controls.password;

    expect(email.valid).toBeFalsy();
    expect(email.errors.required).toBeTruthy();

    expect(password.valid).toBeFalsy();
    expect(password.errors.required).toBeTruthy();
  });

  it('should appear error message if throw and error when submit', () => {
    component.form.controls.email.setValue('my@email.com');
    component.form.controls.password.setValue('123456');
    expect(component.form.valid).toBeTruthy();

    const errorMessage = 'Error';
    const error = { message: errorMessage };
    authService.signIn.and.returnValue(throwError(error));
    fixture.detectChanges();

    component.onSubmit();
    fixture.detectChanges();

    expect(component.errorMessage).toBe(errorMessage);

    const errorBox = de.query(By.css('.error-box'));
    expect(errorBox).toBeTruthy();
  });

  it('should invoke auth service when form is valid and navigate', () => {
    const navigate = spyOn(router, 'navigate');

    const email = component.form.controls.email;
    email.setValue('my@email.com');
    const password = component.form.controls.password;
    password.setValue('123456');
    authService.signIn
      .withArgs('my@email.com', '123456')
      .and.returnValue(of('user'));

    component.onSubmit();

    expect(authService.signIn.calls.any()).toBeTruthy();
    expect(navigate).toHaveBeenCalled();
  });
});
