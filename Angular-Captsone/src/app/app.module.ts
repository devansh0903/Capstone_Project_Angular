import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieComponentComponent } from './movie-component/movie-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot([
      { path : '', component: MoviedetailsComponent},
      
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
