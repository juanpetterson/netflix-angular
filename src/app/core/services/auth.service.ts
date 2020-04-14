import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { User } from 'app/models/user';
import { Storage } from '../store';
// import users from '../models/users';
import users from '../../../assets/data/users.json';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<User>(null);
  private loggedUser: User;
  private store = new Storage('@netflix');
  // users = JSON.parse(usersJson);

  constructor(private router: Router) {}

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

  public logout() {
    this.store.remove('user');
    this.handleAuthentication(null);
    this.router.navigate(['/']);
  }

  public getLoggedUser(): User {
    const storedUser = this.store.get('user');
    if (storedUser) {
      return this.loggedUser;
    } else {
      return null;
    }
  }

  private handleAuthentication(user: any) {
    this.loggedUser = user;
    if (user) {
      this.store.set('user', user);
    } else {
      this.store.remove('user');
    }
  }
}