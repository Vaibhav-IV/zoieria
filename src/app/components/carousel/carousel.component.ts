import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent,NgbSlideEventSource,NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // slideActivate(ngbSlideEvent: NgbSlideEvent){
  //   console.log(ngbSlideEvent.source);
  //   console.log(ngbSlideEvent.paused);
  //   console.log(NgbSlideEventSource.INDICATOR);
  //   console.log(NgbSlideEventSource.ARROW_LEFT);
  //   console.log(NgbSlideEventSource.ARROW_RIGHT); 
  // }

  @ViewChild('ngcarousel',{static:true}) 
  ngCarousel!: NgbCarousel

  navigateToSlide(item:any){
    this.ngCarousel.select(item)
    console.log(item); 
  }

  goToPrev(){
    this.ngCarousel.prev()
  }

  goToNext(){
    this.ngCarousel.next()
  }
  stopCarousel() {
    this.ngCarousel.pause();
  }
  restartCarousel() {
    this.ngCarousel.cycle();
  }

}
