import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('header', { static: false }) headerEl: ElementRef;
  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.headerEl.nativeElement.classList.add('header--solid');
    } else {
      this.headerEl.nativeElement.classList.remove('header--solid');
    }
  }

  constructor() {}

  ngOnInit() {}
}
