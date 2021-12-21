import { MinimalMoviesData } from "../MinimalMovieData";
import { Movie } from "../Movie";
import { MovieId } from "../MovieId";
import { Specification } from "../specifications/Specification";

export interface MoviesRetriever {
    GetMovie(id: MovieId): Promise<Movie>;
    Find(specification: Specification): Promise<MinimalMoviesData>;
}
