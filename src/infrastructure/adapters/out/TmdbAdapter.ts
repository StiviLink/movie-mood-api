import axios, { AxiosInstance } from "axios"
import IMoviePort from "../../../domain/ports/out/IMoviePort.js"
import { MovieDetails, MoviesResponse } from "../../../domain/models/Movie.js"

export default class TmdbAdapter implements IMoviePort {
    private readonly apiToken: string
    private baseUrl: string = "https://api.themoviedb.org/3"
    private axiosClient: AxiosInstance

    constructor(apiToken: string) {
        this.apiToken = apiToken
        this.axiosClient = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiToken}`
            }
        })
    }

    async getMovieById(id: number) {
        return (await this.axiosClient.get<MovieDetails>(`/movie/${id}&language=fr-FR`))?.data
    }

    async getMoviesByGenres(genres: number[], page?:number) {
        return (await this.axiosClient.get<MoviesResponse>(`/discover/movie?with_genres=${genres.reduce(
            (acc: string, prev: number) => `${acc}${prev}|`, '')}&language=fr-FR&page=${page}`))?.data
    }

    async getMoviesByTitle(title: string) {
        return (await this.axiosClient.get<MoviesResponse>(`/search/movie?query=${title}&language=fr-FR`))?.data
    }
}