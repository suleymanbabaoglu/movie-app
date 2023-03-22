import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    FooterComponent,
    MovieDetailsComponent,
    SummaryPipe,
    MovieFilterPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
