import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import users from '../../../assets/data/users';
import { User } from '../../shared/models/user';
import { Storage } from '../store';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated$ = new BehaviorSubject<User>(null);
  private store = new Storage('@netflix');

  constructor(private router: Router) {}

  public signIn(username: string, password: string): Observable<User> {
    return new Observable((subscriber) => {
      const foundedUser = users.find((user) => user.email === username);

      if (!foundedUser) {
        throw new Error(
          `Sorry, we can't find an account with this email address. Please try again.`
        );
      }

      if (foundedUser.password !== password) {
        throw new Error('Incorrect password. Please try again.');
      }

      this.handleAuthentication(foundedUser);

      subscriber.next(foundedUser);
    });
  }

  public autoLogin() {
    const user = this.store.get('user');

    if (user) {
      this.handleAuthentication(user);
    }
  }

  public logout() {
    this.store.remove('user');
    this.handleAuthentication(null);
    this.router.navigate(['/']);
  }

  private handleAuthentication(user: any) {
    this.isAuthenticated$.next(user);
    if (user) {
      this.store.set('user', user);
    } else {
      this.store.remove('user');
    }
  }
}
