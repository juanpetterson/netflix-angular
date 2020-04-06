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
  hoverItemIndex = -1;
  translateX = 0;
  showPrev = false;
  showNext = true;
  totalPages = [];
  currentPage = 0;
  totalMoved = 0;
  hideSliderDetails = true;

  @HostListener('window:resize', []) onResize() {
    this.onWindowResize();
  }

  constructor() {}

  ngOnInit(): void {
    this.sliderItems = this.mediaGroup.medias;
    this.updateSliderState();
    this.updateTotalPages();
  }

  ngAfterViewInit(): void {
    this.sliderItemWidth = this.sliderItem.nativeElement.clientWidth;
    this.sliderTotalWidth = this.slider.nativeElement.scrollWidth;
    this.sliderTotalScroll = this.slider.nativeElement.clientWidth;
  }

  onWindowResize() {
    this.updateSliderState();
    this.updateTotalPages();

    this.sliderItemWidth = this.sliderItem.nativeElement.clientWidth;
    this.sliderTotalWidth = this.slider.nativeElement.scrollWidth;
    this.sliderTotalScroll = this.slider.nativeElement.clientWidth;

    this.currentPage = 0;
    this.translateX = 0;
    this.slider.nativeElement.style.transform = `translateX(${this.translateX}px)`;
    this.totalMoved = 0;

    this.showPrev = false;
    this.showNext = true;
  }

  updateSliderState(): void {
    const windowWidth = window.innerWidth;
    let showItems = 3;

    if (windowWidth > 1400) {
      showItems = 6;
    } else if (windowWidth > 1100) {
      showItems = 5;
    } else if (windowWidth > 800) {
      showItems = 4;
    }

    this.showItems = showItems;
  }

  updateTotalPages(): void {
    this.totalPages = new Array(
      Math.ceil(this.sliderItems.length / this.showItems)
    ).fill(0);
  }

  updateCurrentPage(): void {
    this.currentPage = Math.ceil(this.totalMoved / this.showItems);
  }

  handlePrevious(): void {
    if (this.currentPage > 0) {
      this.totalMoved -= this.showItems;
      this.updateCurrentPage();
    }
    this.showNext = true;
    const toTranslate = this.sliderItemWidth * this.showItems;

    if (this.translateX + toTranslate >= 0) {
      this.translateX = 0;
      this.showPrev = false;
    } else {
      this.translateX += toTranslate;
    }

    this.slider.nativeElement.style.transform = `translateX(${this.translateX}px)`;
  }

  handleNext(): void {
    if (this.currentPage < this.totalPages.length) {
      this.totalMoved += this.showItems;
      this.updateCurrentPage();
    }

    this.showPrev = true;
    const toTranslate = this.sliderItemWidth * this.showItems;

    if (
      this.sliderTotalWidth - this.sliderTotalScroll <
      Math.abs(this.translateX) + toTranslate
    ) {
      this.translateX =
        (this.sliderTotalWidth -
          this.sliderTotalScroll +
          this.sliderTotalScroll * 0.04) *
        -1;
      this.showNext = false;
    } else {
      this.translateX -= toTranslate;
    }

    this.slider.nativeElement.style.transform = `translateX(${this.translateX}px)`;
  }

  onEnterSlider(): void {
    this.hideSliderDetails = false;
  }

  onLeaveSlider(): void {
    this.hideSliderDetails = true;
  }

  onMouseEnterItem(index: number): void {
    this.hoverItemIndex = index;
  }
  onMouseLeaveItem(): void {
    this.hoverItemIndex = -1;
  }

  getTranformStyle(itemIndex: number): string {
    if (this.hoverItemIndex === -1) {
      return '';
    }
    const firstItemHover = this.isFirstItemIndex();
    const lastItemHover = this.isLastItemIndex();
    const baseScale = 2;
    const baseMultiplier = (25 * this.showItems * baseScale) / this.showItems;

    // current item
    if (itemIndex === this.hoverItemIndex) {
      if (firstItemHover) {
        console.log(this.sliderItems[itemIndex]);
        return `scale(${baseScale}) translateX(${baseMultiplier / 2}%)`;
      }
      if (lastItemHover) {
        return `scale(${baseScale}) translateX(-${baseMultiplier / 2}%)`;
      }
      return `scale(${baseScale})`;
    }

    // item before
    if (itemIndex < this.hoverItemIndex) {
      if (firstItemHover) {
        return 'translateX(0)';
      }
      if (lastItemHover) {
        return `translateX(-${baseMultiplier * 2}%)`;
      }
      return `translateX(-${baseMultiplier}%)`;
    }

    // item after
    if (itemIndex > this.hoverItemIndex) {
      if (firstItemHover) {
        return `translateX(${baseMultiplier * 2}%)`;
      }
      if (lastItemHover) {
        return 'translateX(0)';
      }
      return `translateX(${baseMultiplier}%)`;
    }

    return '';
  }

  private isFirstItemIndex(): boolean {
    return this.hoverItemIndex % this.showItems === 0;
  }

  private isLastItemIndex(): boolean {
    return (this.hoverItemIndex + 1) % this.showItems === 0;
  }
}
