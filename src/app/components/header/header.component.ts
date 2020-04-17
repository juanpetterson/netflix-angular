import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  Input,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('header') headerEl: ElementRef;
  @ViewChild('dropdown') dropdown: ElementRef;
  @Input() backgroundColor = 'transparent';
  @Input() showNavigation = true;
  public loggedUser: User;
  public hoverDropdown = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.backgroundColor === 'transparent') {
      if (window.pageYOffset > 0) {
        this.headerEl.nativeElement.classList.add('header--dark');
      } else {
        this.headerEl.nativeElement.classList.remove('header--dark');
      }
    }
  }

  constructor(public authService: AuthService) {}

  ngAfterViewInit() {
    this.headerEl.nativeElement.classList.add(
      `header--${this.backgroundColor}`
    );
  }

  onLogout() {
    this.authService.logout();
  }
}
