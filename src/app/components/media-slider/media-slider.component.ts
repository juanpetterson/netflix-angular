import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MediaGroup } from '../../models/media-group';

@Component({
  selector: 'app-media-slider',
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.scss'],
})
export class MediaSliderComponent implements OnInit {
  // @Input()
  // public mediaGroup = new BehaviorSubject<MediaGroup>(null);
  @ViewChild('slider', { static: false }) slider: ElementRef;
  @Input() mediaGroup: MediaGroup;
  moving = false;
  mv = 0;
  startId = 0;
  showItems = 1;
  totalItems = 0;
  sliderItems = [];
  click = false;

  constructor() {}

  ngOnInit(): void {
    this.updateSliderState();
  }

  updateSliderState() {
    const windowWidth = window.innerWidth;
    let showItems = 1;

    if (windowWidth > 1800) {
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

    const mv = 100 / showItems;

    this.showItems = showItems;
    this.mv = mv;
  }

  onResize() {
    this.updateSliderState();
  }

  updateSliderItems(baseShowItem = this.showItems) {
    const centerDataId = [];

    for (let i = 0; i < baseShowItem; i++) {
      const x = this.startId + i;

      if (x < this.totalItems) {
        centerDataId.push(x);
      } else {
        centerDataId.push(x - this.totalItems);
      }
    }

    const leftDataId = [];
    for (let i = 0; i < baseShowItem; i++) {
      const x = this.startId - i - 1;

      if (x >= 0) {
        leftDataId.push(x);
      } else {
        leftDataId.push(this.totalItems + x);
      }
    }

    leftDataId.reverse();

    const rightDataId = [];
    for (let i = 0; i <= baseShowItem; i++) {
      const x = this.startId + baseShowItem + i;

      if (x < this.totalItems) {
        rightDataId.push(x);
      } else {
        rightDataId.push(x - this.totalItems);
      }
    }

    console.log('left', leftDataId);
    console.log('center', centerDataId);
    console.log('right', rightDataId);

    let selectIds = [...leftDataId, ...centerDataId, ...rightDataId];
    let sliderItem = [];

    if (this.mediaGroup.medias.length) {
      selectIds.map((itemId) => {
        this.sliderItems.push(this.mediaGroup.medias[itemId]);
      });
    }
  }

  handlePrevious() {
    console.log('prev');
    const reducePrev = this.startId - this.showItems;
    let resetStartId = 0;

    if (reducePrev < 0) {
      resetStartId = this.totalItems + reducePrev;
    } else {
      resetStartId = reducePrev;
    }

    this.startId = resetStartId;
    this.moving = true;

    this.slider.nativeElement.style.transform = 'translate3d(0%, 0, 0)';

    this.updateSliderItems();
  }
  handleNext() {
    const plusNext = this.startId + this.showItems;
    let resetStartId = 0;

    if (plusNext >= this.totalItems) {
      resetStartId = plusNext - this.totalItems;
    } else {
      resetStartId = plusNext;
    }

    this.startId = resetStartId;
    this.moving = true;

    console.dir(this.slider);

    this.slider.nativeElement.style.transform = `translate3d(-1${this.mv}%, 0, 0)`;

    this.updateSliderItems();
  }
}
