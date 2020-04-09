import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AuthService } from 'app/ core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}
  @ViewChild('header') headerEl: ElementRef;
  @ViewChild('dropdown') dropdown: ElementRef;

  hoverDropdown = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.headerEl.nativeElement.classList.add('header--solid');
    } else {
      this.headerEl.nativeElement.classList.remove('header--solid');
    }
  }

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
  }

  onShowDropdown() {
    // this.hoverDropdown = true;
    // this.dropdown.nativeElement.classList.add('dropdown--active');
  }

  onHideDropdown() {
    // this.hoverDropdown = false;
    // this.dropdown.nativeElement.classList.remove('dropdown--active');
  }
}
