import { MovieId } from "./MovieId";
import { Poster } from "./Poster";

export interface MinimalMovieData {
    Id: MovieId;
    Title: string;
    Year: number;
    Poster: Poster;
}

export type MinimalMoviesData = MinimalMovieData[];