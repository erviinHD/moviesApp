import { AfterViewInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/Billboard-Response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  
  public swiper: Swiper;
  @Input() movies: Movie[];

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    });
  }

  ngOnInit(): void {
  }

  onSlideNext() {
    this.swiper.slideNext();
  }

  onSlidePrev() {
    this.swiper.slidePrev();
  }

  goMovie(movie: Movie) {
    this.router.navigate(['/movie', movie.id])
  }
}
