import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MediaComponent } from './components/media/media.component';
import { MediaBrowserPageComponent } from './pages/media-browser-page/media-browser-page.component';
import { MediaSliderComponent } from './components/media-slider/media-slider.component';
import { MaturityStyleDirective } from './shared/directives/maturity-style.directive';
import { BillboardComponent } from './components/billboard/billboard.component';
import { WatchPlayerComponent } from './components/watch-player/watch-player.component';
import { WatchPageComponent } from './pages/watch-page/watch-page.component';
import { WatchPlayerControlsComponent } from './components/watch-player/watch-player-controls/watch-player-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    MediaComponent,
    MediaBrowserPageComponent,
    MediaSliderComponent,
    MaturityStyleDirective,
    BillboardComponent,
    WatchPlayerComponent,
    WatchPageComponent,
    WatchPlayerControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
