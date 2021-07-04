import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillboardResponse } from '../interfaces/Billboard-Response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getBilboard(): Observable<BillboardResponse> {
    return this.http.get<BillboardResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=b0ec143ac1edc269a5c7c2c095352b6f&language=en-US&page=1'
    );
  }
}
