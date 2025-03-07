import { MoviesResponse } from "../../models/Movie.js"
import { WeatherCondition } from "../../models/WeatherMovie.js"

export default interface IWeatherMoviePort {
    getWeatherMovieRecommendation(city: string, page?: number): Promise<{ weatherMovieMapped: WeatherCondition, movies: MoviesResponse }>
}