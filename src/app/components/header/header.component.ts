import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { User } from 'app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') headerEl: ElementRef;
  @ViewChild('dropdown') dropdown: ElementRef;
  public loggedUser: User;
  public hoverDropdown = false;
  public isSolid: boolean;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.headerEl.nativeElement.classList.add('header--solid');
    } else {
      this.headerEl.nativeElement.classList.remove('header--solid');
    }
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loggedUser = this.authService.getLoggedUser();
  }

  onLogout() {
    this.authService.logout();
  }
}
