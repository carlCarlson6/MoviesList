import { Movie, Movies } from "./Movie";
import { UserId } from "./UserId";

export class MoviesList {
    get Movies(): Movies {
        return this.movies;
    }

    constructor(
        readonly Owner: UserId,
        private movies: Movies
    ) {}

    static NewList(owner: UserId): MoviesList {
        return new MoviesList(owner, []);
    }

    AddMovie(movie: Movie): void {
        this.movies.push(movie);
    }

    AddMovies(movies: Movies): void {
        this.movies = this.movies.concat(movies);
    }
}
