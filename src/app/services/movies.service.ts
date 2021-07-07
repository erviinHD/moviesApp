import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BillboardResponse, Movie } from '../interfaces/Billboard-Response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseURL = 'https://api.themoviedb.org/3/';
  private pageBillboard = 1;
  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: 'b0ec143ac1edc269a5c7c2c095352b6f',
      language: 'es-ES',
      page: this.pageBillboard.toString(),
    };
  }

  resetBillboardContent(){
    this.pageBillboard = 1;
  }

  getBilboard(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }

    this.loading = true;
    return this.http
      .get<BillboardResponse>(`${this.baseURL}movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.pageBillboard += 1;
          this.loading = false;
        })
      );
  }

  searchMovie(text: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: text, include_adult: 'true' };

    return this.http.get<BillboardResponse>(`${this.baseURL}search/movie`, { params })
      .pipe(
        map(res => res.results)
      )
  }
}
