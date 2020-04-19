import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Input, Directive } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { BillboardComponent } from './billboard.component';
import { Media } from 'app/shared/models/media';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[routerLink]',
  // tslint:disable-next-line: no-host-metadata-property
  host: { '(click)': 'onClick()' },
})
// tslint:disable-next-line: directive-class-suffix
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('BillboardComponent', () => {
  let component: BillboardComponent;
  let fixture: ComponentFixture<BillboardComponent>;
  let de: DebugElement;
  let media: Media;

  beforeEach(async(() => {
    media = {
      id: 1,
      title: 'All the Bright Places',
      thumbnail: 'assets/medias/all-the-bright-places/thumbnail.jpg',
      thumbnailLogo: 'assets/medias/all-the-bright-places/thumbnail-logo.webp',
      poster: 'assets/medias/all-the-bright-places/poster.webp',
      topPoster: '',
      billboard: 'assets/medias/all-the-bright-places/billboard.webp',
      mediaPath: 'assets/medias/all-the-bright-places/media.mp4',
      // tslint:disable-next-line: max-line-length
      synopsis: `Two teens facing personal struggles form a powerful bond as they embark on a cathartic journey chronicling the wonders of Indiana.`,
      maturity: 12,
      match: '88% Match',
      lastRelease: '2020',
      top10: false,
      originals: true,
      duration: '1h 48m',
      starring: ['Elle Fanning', 'Justice Smith', 'Luke Wilson'],
      genres: ['Teen Movies', 'Dramas', 'Romantic Dramas'],
      tags: ['Dark', 'Emotional', 'Romantic'],
    };

    TestBed.configureTestingModule({
      declarations: [BillboardComponent, RouterLinkDirectiveStub],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.media = media;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct route for the media', () => {
    const routerLink = de
      .query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);

    const playButton = de.query(By.css('#play'));
    playButton.nativeElement.click();

    expect(routerLink.navigatedTo).toEqual(['/watch', media.id]);
  });

  it('should have the correct source image for the billboard', () => {
    const image = de.query(By.css('.billboard__image'));
    image.nativeElement.click();

    expect(image.nativeElement.src).toContain(media.billboard);
  });
});
