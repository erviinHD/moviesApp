import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peliculasApp';

  constructor(private _movies: MoviesService){
    this._movies.getBilboard()
      .subscribe( res => {
        console.log(res);
        
      })
  }
}
