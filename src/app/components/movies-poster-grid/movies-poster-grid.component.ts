import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/Billboard-Response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.scss']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goMovie(movie: Movie) {
    this.router.navigate(['/movie', movie.id])
  }

}
