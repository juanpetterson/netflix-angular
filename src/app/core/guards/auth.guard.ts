import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';
import { Storage } from '../store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private store = new Storage('@netflix');

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const storedUser = this.store.get('user');

    return this.authService.isAuthenticated$.pipe(
      take(1),
      map((user) => {
        const isAuthenticated = !!user && !!storedUser;
        const isLogin = next.data.isLogin;

        if (isLogin && isAuthenticated) {
          return this.router.createUrlTree(['/browse']);
        }

        if (isLogin && !isAuthenticated) {
          return true;
        }

        if (isAuthenticated) {
          return true;
        }

        this.authService.isAuthenticated$.next(null);

        return this.router.createUrlTree(['/']);
      })
    );
  }
}
