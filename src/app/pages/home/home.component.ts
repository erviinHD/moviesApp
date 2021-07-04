import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/Billboard-Response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private _movies: MoviesService) {

  }

  ngOnInit(): void {
    this._movies.getBilboard().subscribe((res) => {
      this.movies = res.results;
    });
  }
}
