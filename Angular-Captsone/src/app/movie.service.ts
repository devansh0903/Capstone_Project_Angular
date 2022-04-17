import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from './model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = '';

  createMovie(movie: Movie) {
    return this.http.post(this.baseUrl, movie);
  }

  getMovies() {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  getMovieById(id: number) {
    return this.http.get<Movie>(this.baseUrl + '/' + id);
  }

  updateMovie(movie: Movie) {
    return this.http.put(this.baseUrl + '/' + movie.Id, movie);
  }

  deleteMovie(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
