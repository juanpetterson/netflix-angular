import { Injectable } from '@angular/core';
import users from '../../../api/user/users';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { User } from 'app/models/user';
import { Storage } from '../store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<User>(null);
  private store = new Storage('@netflix');

  constructor() {}

  public signIn(username: string, password: string): Observable<User> {
    return new Observable((subscriber) => {
      const foundedUser = users.find((user) => user.email === username);

      if (!foundedUser) {
        throw new Error(
          "Sorry, we can't find an account with this email address. Please try again."
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

  public handleAuthentication(user: any) {
    this.isAuthenticated$.next(user);
    this.store.set('user', user);
  }
}
