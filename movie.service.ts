import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie} from "../model/movie.model";


@Injectable( {
    providedIn: 'root',
})
export class MovieService{

    constructor(private httpClient:HttpClient){

    }
    public getMovies(){
        return this.httpClient.get<Movie[]>("http://localhost:52671/api/Movie");
    }
    public getMoviebyId(id: number){
        return this.httpClient.get("http://localhost:52671/api/Movie" + id)
    }
    public createMovie(movie:Movie){
        return this.httpClient.post("http://localhost:52671/api/Movie", movie);
    }
    public deleteMovie(id?: number){
        return this.httpClient.delete("http://localhost:52671/api/Movie" + '?id=' + id );
    }
}