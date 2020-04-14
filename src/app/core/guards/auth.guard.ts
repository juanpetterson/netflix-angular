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

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loggedUser = this.authService.getLoggedUser();

    const isAuthenticated = !!loggedUser;
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

    return this.router.createUrlTree(['/']);

    // return this.authService.isAuthenticated$.pipe(
    //   take(1),
    //   map((user) => {
    //     const isAuthenticated = !!user;
    //     const isLogin = next.data.isLogin;

    //     if (isLogin && isAuthenticated) {
    //       return this.router.createUrlTree(['/browse']);
    //     }

    //     if (isLogin && !isAuthenticated) {
    //       return true;
    //     }

    //     if (isAuthenticated) {
    //       return true;
    //     }

    //     return this.router.createUrlTree(['/']);
    //   })
    // );
  }
}
