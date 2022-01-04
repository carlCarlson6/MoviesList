import { Axios } from "axios";
import { MinimalMoviesData } from "../../core/MinimalMovieData";
import { Movie } from "../../core/Movie";
import { MovieId } from "../../core/MovieId";
import { MoviesRetriever } from "../../core/services/MoviesRetrievier";
import { createAxiosInstance } from "./createAxiosInstance";
import { OmdbConfig } from "./OmdbConfig";
import { intoDomainMovie, OmdbMovieResponse } from "./OmdbMovieResponse";

export class OmdbRetriever implements MoviesRetriever {
    private readonly httpClient: Axios;

    constructor(omdbConfig: OmdbConfig) {
        this.httpClient = createAxiosInstance(omdbConfig);
    }

    async GetMovie(id: MovieId): Promise<Movie> {
        const response = await this.httpClient.get<OmdbMovieResponse>('', {
            params: {
                i: id.ToString(),
            }
        });

        // TODO - throw domain exceptions
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        if (response.data.Response === "False") {
            throw new Error(response.data.Error);
        }

        return intoDomainMovie(response.data);
    }

    async Search(title: string, pagination: number): Promise<MinimalMoviesData> {
        const response = await this.httpClient.get<OmdbMovieResponse>('', {
            params: {
                s: title,
                page: pagination === 0 ? 1 : pagination
            }
        });
    
        throw new Error("not implemented");
    }
}
