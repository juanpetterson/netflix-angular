import { MaturityStyleDirective } from './maturity-style.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, HostListener } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<p appMaturityStyle>{{innerText}}</p>',
})
class TestComponent {
  constructor() {}
  innerText: string;
}

describe('MaturityColorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, MaturityStyleDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have black background and white font color when have innerText equal or higher than 18', () => {
    component.innerText = '18';
    const paragraph = de.query(By.css('p'));
    fixture.detectChanges();

    expect(paragraph.nativeElement.style.backgroundColor).toEqual(
      'rgb(19, 17, 17)'
    );
    expect(paragraph.nativeElement.style.color).toEqual('rgb(255, 255, 255)');
  });

  it('should have red background and white font color when have innerText equal to 16', () => {
    component.innerText = '16';
    const paragraph = de.query(By.css('p'));
    fixture.detectChanges();

    expect(paragraph.nativeElement.style.backgroundColor).toEqual(
      'rgb(215, 38, 45)'
    );
    expect(paragraph.nativeElement.style.color).toEqual('rgb(255, 255, 255)');
  });
  it('should have orange background and white font color when have innerText equal to 14', () => {
    component.innerText = '14';
    const paragraph = de.query(By.css('p'));
    fixture.detectChanges();

    expect(paragraph.nativeElement.style.backgroundColor).toEqual(
      'rgb(231, 121, 43)'
    );
    expect(paragraph.nativeElement.style.color).toEqual('rgb(255, 255, 255)');
  });
  it('should have yellow background and black font color when have innerText equal to 12', () => {
    component.innerText = '12';
    const paragraph = de.query(By.css('p'));
    fixture.detectChanges();

    expect(paragraph.nativeElement.style.backgroundColor).toEqual(
      'rgb(247, 199, 39)'
    );
    expect(paragraph.nativeElement.style.color).toEqual('rgb(0, 0, 0)');
  });
  it('should have blue background and white font color when have innerText equal to 10', () => {
    component.innerText = '10';
    const paragraph = de.query(By.css('p'));
    fixture.detectChanges();

    expect(paragraph.nativeElement.style.backgroundColor).toEqual(
      'rgb(46, 136, 189)'
    );
    expect(paragraph.nativeElement.style.color).toEqual('rgb(255, 255, 255)');
  });
  it('should have green background and white font color when have innerText equal to L', () => {
    component.innerText = 'L';
    const paragraph = de.query(By.css('p'));
    fixture.detectChanges();

    expect(paragraph.nativeElement.style.backgroundColor).toEqual(
      'rgb(0, 156, 76)'
    );
    expect(paragraph.nativeElement.style.color).toEqual('rgb(255, 255, 255)');
  });
});
