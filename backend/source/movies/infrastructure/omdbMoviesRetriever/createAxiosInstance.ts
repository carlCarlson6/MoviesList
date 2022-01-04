import { Axios } from "axios";
import { OmdbConfig } from "./OmdbConfig";

export const createAxiosInstance = (omdbConfig: OmdbConfig) => 
    new Axios({
        baseURL: omdbConfig.Url,
        params: {
            apiKey: omdbConfig.ApiKey
        }
    });