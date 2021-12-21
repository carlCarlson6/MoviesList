import { MovieId } from "./MovieId";
import { Poster } from "./Poster";
import { Ratings } from "./Rating";

export interface Movie {
    Id: MovieId;
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
    Poster: Poster;
    Ratings: Ratings;
    Metascore: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
}

export type Movies = Movie[];
