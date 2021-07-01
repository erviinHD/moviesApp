import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
   }


   getBilboard(){
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=b0ec143ac1edc269a5c7c2c095352b6f&language=en-US&page=1');
   }
}
