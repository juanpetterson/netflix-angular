import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { User } from 'app/shared/models/user';
import { MediaStorageService } from 'app/core/services/media-storage.service';
import { MediaService } from 'app/core/services/media.service';

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
    private storageService: MediaStorageService
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((user) => {
      this.loggedUser = user;
    });

    this.lastWatchedMedias = this.storageService
      .getStoredMedias(3)
      .map((media) => media.title)
      .join(', ');
  }
}
