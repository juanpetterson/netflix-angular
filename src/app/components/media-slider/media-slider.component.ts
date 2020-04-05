import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { MediaGroup } from '../../models/media-group';

@Component({
  selector: 'app-media-slider',
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.scss'],
})
export class MediaSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('slider', { static: false }) slider: ElementRef;
  @ViewChild('sliderItem', { static: false }) sliderItem: ElementRef;
  @Input() mediaGroup: MediaGroup;
  showItems = 1;
  sliderItems = [];
  sliderTotalWidth = 0;
  sliderItemWidth = 0;
  sliderTotalScroll = 0;
  translateX = 0;
  showPrev = false;
  showNext = true;
  @HostListener('window:resize', []) onResize() {
    this.updateSliderState();
  }

  constructor() {}

  ngOnInit(): void {
    this.sliderItems = this.mediaGroup.medias;
  }

  ngAfterViewInit() {
    this.updateSliderState();
    this.sliderItemWidth = this.sliderItem.nativeElement.clientWidth;
    this.sliderTotalWidth = this.slider.nativeElement.scrollWidth;
  }

  updateSliderState() {
    const windowWidth = window.innerWidth;
    let showItems = 1;

    if (windowWidth > 1800) {
      showItems = 7;
    } else if (windowWidth > 1800) {
      showItems = 6;
    } else if (windowWidth > 1260) {
      showItems = 5;
    } else if (windowWidth > 980) {
      showItems = 4;
    } else if (windowWidth > 768) {
      showItems = 3;
    } else if (windowWidth > 600) {
      showItems = 2;
    }

    this.showItems = showItems;
    this.sliderItemWidth = this.sliderItem.nativeElement.clientWidth;
  }

  handlePrevious() {
    this.showNext = true;
    const toTranslate = this.sliderItemWidth * this.showItems;

    if (this.translateX + toTranslate > 0) {
      this.translateX = 0;
      this.showPrev = false;
    } else {
      this.translateX += toTranslate;
    }

    this.slider.nativeElement.style.transform = `translateX(${this.translateX}px)`;
  }

  handleNext() {
    this.showPrev = true;
    const toTranslate = this.sliderItemWidth * this.showItems;
    const sliderWidth = this.slider.nativeElement.clientWidth;

    if (
      this.sliderTotalWidth - sliderWidth <
      Math.abs(this.translateX) + toTranslate
    ) {
      this.translateX = (this.sliderTotalWidth - sliderWidth + 60) * -1;
      this.showNext = false;
    } else {
      this.translateX -= toTranslate;
    }

    this.slider.nativeElement.style.transform = `translateX(${this.translateX}px)`;
  }
}
