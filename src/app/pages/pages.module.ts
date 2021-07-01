import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';



@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailComponent,
    MovieSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
