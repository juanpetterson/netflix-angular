import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMaturityStyle]',
})
export class MaturityStyleDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.updateMaturityStyle(this.elRef.nativeElement.innerText);
  }

  updateMaturityStyle(value: any): void {
    let backgroundColor = '';
    let color = '';

    if (value >= 18) {
      backgroundColor = '#131111';
      color = '#ffffff';
    } else if (value >= 16) {
      backgroundColor = '#d7262d';
      color = '#ffffff';
    } else if (value >= 14) {
      backgroundColor = '#e7792b';
      color = '#ffffff';
    } else if (value >= 12) {
      backgroundColor = '#f7c727';
      color = '#000000';
    } else if (value >= 10) {
      backgroundColor = '#2e88bd';
      color = '#ffffff';
    } else if (value === 'L') {
      backgroundColor = '#009c4c';
      color = '#ffffff';
    }

    this.elRef.nativeElement.style.backgroundColor = backgroundColor;
    this.elRef.nativeElement.style.color = color;
    this.elRef.nativeElement.style.fontWeight = 'bold';
  }
}
