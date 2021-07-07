import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/Billboard-Response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];
  @HostListener('window:scroll', ['$event'])

  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      if (this._movies.loading) {
        return;
      }
      this._movies.getBilboard().subscribe(movies => {
        this.movies.push(...movies);
      })
    }
  }

  constructor(private _movies: MoviesService) {

  }

  ngOnInit(): void {
    this._movies.getBilboard().subscribe((movies) => {
      this.moviesSlideShow = movies;
      this.movies = movies;
    });
  }

  ngOnDestroy(): void{
    this._movies.resetBillboardContent()
  }
}
