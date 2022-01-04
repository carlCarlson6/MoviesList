import { MinimalMoviesData } from "../MinimalMovieData";
import { Movie } from "../Movie";
import { MovieId } from "../MovieId";

export interface MoviesRetriever {
    GetMovie(id: MovieId): Promise<Movie>;
    Search(title: string, pagination: number): Promise<MinimalMoviesData>;
}
