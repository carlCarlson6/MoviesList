import { Axios } from "axios";
import { MinimalMoviesData } from "../../core/MinimalMovieData";
import { Movie } from "../../core/Movie";
import { MovieId } from "../../core/MovieId";
import { MoviesRetriever } from "../../core/services/MoviesRetrievier";
import { Specification } from "../../core/specifications/Specification";
import { OmdbConfig } from "./OmdbConfig";
import { intoDomainMovie, OmdbMovieResponse } from "./OmdbMovieResponse";

export class OmdbRetriever implements MoviesRetriever {
    private readonly httpClient: Axios;

    constructor(omdbConfig: OmdbConfig) {
        this.httpClient = new Axios({
            baseURL: omdbConfig.Url,
            params: {
                apiKey: omdbConfig.ApiKey
            }
        });
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

    async Find(specification: Specification): Promise<MinimalMoviesData> {
        throw new Error("Method not implemented.");
    }
}
