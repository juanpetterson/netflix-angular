import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { User } from 'app/shared/models/user';
import { MediaStorageService } from 'app/core/services/media-storage.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  public loggedUser: User;
  public lastWatchedMedias: string;

  constructor(
    private authService: AuthService,
    private mediaStorageService: MediaStorageService
  ) {}

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    this.lastWatchedMedias = this.mediaStorageService
      .getStoredMedias(3)
      .map((media) => media.title)
      .join(', ');
  }
}
