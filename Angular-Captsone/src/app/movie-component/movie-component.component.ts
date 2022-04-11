import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moviecomponent',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {
export class MovieComponent{

  movies: Array<any> = [];

  ngOnInit(): void {
  constructor(){
    this.movies = [
      {
        movieId: 1,
        movieTitle: 'Megamind',
        movieSummary:'Megamind is the best movie ever',
        genre: 'Comedy',
        actors: "Mr Guy",
        movieDuration: 999,
        moviePoster: 'assets/megamind.jpeg'
      },
      {
        movieId: 2,
        movieTitle: 'Boss Baby',
        movieSummary:'A movie where the boss is a baby wtf',
        genre: 'Comedy',
        actors: "Da Babby",
        movieDuration: 999,
        moviePoster: 'assets/bossbaby.jpg'
      },
      {
        movieId: 3,
        movieTitle: 'Minions',
        movieSummary:'Holy shit yellow beans',
        genre: 'Comedy',
        actors: "Mr Guy",
        movieDuration: 999,
        moviePoster: 'assets/minions.jpg'
      },
    ]
  }

}
