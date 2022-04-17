import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  movies: Movie[] = [];
  movieId: string = '';
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    // fetch data from the backend using the service
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }
  addMovie(): void {
    this.router.navigate(['add-movie']);
  }
  editMovie(): void {
    this.router.navigate(['edit-movie']);
  }
  deleteMovie(movie?: Movie): void {
    alert(movie?.movieId);
    this.movieService.deleteMovie(movie?.movieId).subscribe((movie) => {
      this.movies = this.movies.filter(
        (movieItem) => movieItem !== movie
      );
    });
  }
}
