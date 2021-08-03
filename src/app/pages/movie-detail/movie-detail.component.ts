import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieResponse } from '../../interfaces/Movie-Response';
import { Cast } from '../../interfaces/Credits-Response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  public movie: MovieResponse;
  public cast: Cast[] = [];
  public productor: any = [];
  public writer: any = [];
  public timeMovie: String = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private _movies: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    combineLatest([
      this._movies.getMovieDetail(id),
      this._movies.getCast(id),
      this._movies.getCrew(id),
    ]).subscribe(([movie, cast, crew]) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
      }

      //Movie
      this.movie = movie;
      this.timeMovie = this.minsToString(this.movie.runtime);

      //Cast
      this.cast = cast.filter((actor) => actor.profile_path !== null);

      // Crew
      this.productor = crew.filter((actor) => actor.job === 'Producer');
      this.writer = crew.filter((actor) => actor.job === 'Director');
    });
    
    // this._movies.getMovieDetail(id).subscribe((res) => {
    //   if (!res) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.movie = res;

    //   this.timeMovie = this.minsToString(this.movie.runtime);
    // });

    // this._movies.getCast(id).subscribe((cast) => {
    //   this.cast = cast.filter((actor) => actor.profile_path !== null);
    // });

    // this._movies.getCrew(id).subscribe((cast) => {
    //   this.productor = cast.filter((actor) => actor.job === 'Producer');
    //   this.writer = cast.filter((actor) => actor.job === 'Director');
    // });
  }

  minsToString(seconds) {
    let numhours = Math.floor((seconds % 86400) / 60);
    let numminutes = Math.floor((seconds % 86400) % 60);

    return numhours + 'h' + numminutes + 'min';
  }
}
