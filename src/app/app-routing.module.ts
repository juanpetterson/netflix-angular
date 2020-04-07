import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MediaBrowserPageComponent } from './pages/media-browser-page/media-browser-page.component';
import { AuthGuard } from './ core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
    data: { isLogin: true },
  },
  {
    path: 'browse',
    component: MediaBrowserPageComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
