import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieResponse } from '../../interfaces/Movie-Response';
import { Cast } from '../../interfaces/Credits-Response';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  public movie: MovieResponse;
  private cast: Cast[];
  private timeMovie: String = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private _movies: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this._movies.getMovieDetail(id).subscribe((res) => {
      if (!res) {
        this.router.navigateByUrl('/home');
      }
      this.movie = res;
      this.timeMovie = this.minsToString(this.movie.runtime);
    });

    this._movies.getCast(id).subscribe((cast) => {
      this.cast = cast;
    });
  }

  minsToString(seconds) {
    let numhours = Math.floor((seconds % 86400) / 60);
    let numminutes = Math.floor((seconds % 86400) % 60);

    return numhours + 'h' + numminutes + 'min';
  }
}
