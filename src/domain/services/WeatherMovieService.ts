import IMoviePort from "../ports/out/IMoviePort.js"
import IWeatherPort from "../ports/out/IWeatherPort.js"
import IWeatherMoviePort from "../ports/in/IWeatherMoviePort.js"
import {weatherMovieMap} from "../models/WeatherMovie.js"

export default class WeatherMovieService implements IWeatherMoviePort {
    constructor(private weatherPort: IWeatherPort, private moviePort: IMoviePort) {}

    async getWeatherMovieRecommendation(city: string, page?: number) {
        const weatherResponse = await this.weatherPort.getWeatherByCity(city)
        const weatherMovieMapped = weatherMovieMap[weatherResponse.weather[0].main]
        const movies = await this.moviePort.getMoviesByGenres(weatherMovieMapped.genres, page)
        return { weatherMovieMapped, movies }
    }
}