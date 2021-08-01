import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailComponent,
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
