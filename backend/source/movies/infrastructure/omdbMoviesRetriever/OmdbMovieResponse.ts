import { Movie } from "../../core/Movie";
import { MovieId } from "../../core/MovieId";
import { Ratings } from "../../core/Rating";

export type Response = "True" | "False"

export interface OmdbMovieResponse {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Ratings;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: Response;
    Error: string;
}

export const intoDomainMovie = (responseMovie: OmdbMovieResponse): Movie => ({
    Id: new MovieId(responseMovie.imdbID),
    Title: responseMovie.Title,
    Year: responseMovie.Year,
    Rated: responseMovie.Rated,
    Released: responseMovie.Released,
    Runtime: responseMovie.Runtime,
    Genre: responseMovie.Genre,
    Director: responseMovie.Director,
    Writer: responseMovie.Writer,
    Actors: responseMovie.Actors,
    Plot: responseMovie.Plot,
    Language: responseMovie.Language,
    Country: responseMovie.Country,
    Awards: responseMovie.Awards,
    Poster: responseMovie.Poster !== "N/A" ? responseMovie.Poster : null,
    Ratings: responseMovie.Ratings,
    Metascore: responseMovie.Metascore,
    Type: responseMovie.Type,
    DVD: responseMovie.DVD,
    BoxOffice: responseMovie.BoxOffice,
    Production: responseMovie.Production,
    Website: responseMovie.Website
});