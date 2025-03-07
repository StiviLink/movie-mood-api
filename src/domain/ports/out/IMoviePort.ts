import { MoviesResponse, MovieDetails } from "../../models/Movie.js"

export default interface IMoviePort {
    getMoviesByTitle(title: string): Promise<MoviesResponse>
    getMoviesByGenres(genres: number[], page?: number): Promise<MoviesResponse>
    getMovieById(id: number): Promise<MovieDetails>
}