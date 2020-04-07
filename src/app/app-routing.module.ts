import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MediaBrowserPageComponent } from './pages/media-browser-page/media-browser-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'browse', component: MediaBrowserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
