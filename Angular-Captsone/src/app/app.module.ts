import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie-component/movie-component.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddmovieComponent } from './addmovie/addmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent, MoviedetailsComponent, AddmovieComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot([
      { path : '', component: MoviedetailsComponent},
      
      ]), Ng2CarouselamosModule, NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
