import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponent implements OnInit {

  movies: Array<any> = [];

  constructor(){
    this.movies = [
      {
        movieId: 1,
        movieTitle: 'Megamind',
        movieSummary:'Megamind is the best movie ever',
        genre: 'Comedy',
        actors: "Mr Guy",
        movieDuration: 999,
        userRating: 'assets/megamind.jpeg'
      },
      {
        movieId: 2,
        movieTitle: 'Boss Baby',
        movieSummary:'A movie where the boss is a baby wtf',
        genre: 'Comedy',
        actors: "Da Babby",
        movieDuration: 999,
        userRating: 'assets/bossbaby.jpg'
      },
      {
        movieId: 3,
        movieTitle: 'Mnions',
        movieSummary:'Holy shit yellow beans',
        genre: 'Comedy',
        actors: "Mr Guy",
        movieDuration: 999,
        userRating: 'assets/minions.jpg'
      },
    ]
  }

}
}
