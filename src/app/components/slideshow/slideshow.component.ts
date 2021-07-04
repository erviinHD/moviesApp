import { AfterViewInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/Billboard-Response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  img = 'https://image.tmdb.org/t/p/original';
  @Input() movies:Movie [];

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    
      
    });
  }

  ngOnInit(): void {
    console.log(this.movies);
    
  }

}
