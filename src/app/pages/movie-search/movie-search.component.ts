import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../interfaces/Billboard-Response';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movies: Movie[] = [];
  textSearch: string = ''
  
  constructor(private activatedRoute: ActivatedRoute, private _movie: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.textSearch = params.searchText;
      this._movie.searchMovie(this.textSearch).subscribe(res=>{
        this.movies = res;
        console.log(this.movies);
        
      })
    })
  }

}
