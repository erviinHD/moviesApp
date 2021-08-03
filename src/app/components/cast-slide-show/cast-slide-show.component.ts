import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from '../../interfaces/Credits-Response';

@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.scss']
})
export class CastSlideShowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      //loop: true,
      freeMode: true,
    });
  }

}
