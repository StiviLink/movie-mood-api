import {Express} from "express"
// ports
import IMoviePort from "../domain/ports/out/IMoviePort.js"
import IWeatherPort from "../domain/ports/out/IWeatherPort.js"
// controllers
import WeatherMovieController from "../infrastructure/adapters/in/controllers/WeatherMovieController.js"
import WeatherController from "../infrastructure/adapters/in/controllers/WeatherController.js"
// routes
import MovieRoute from "../infrastructure/adapters/in/routes/MovieRoute.js"
import WeatherRoute from "../infrastructure/adapters/in/routes/WeatherRoute.js"

export default class WeatherMovieApplication {
    private readonly weatherMovieController: WeatherMovieController
    private readonly weatherController: WeatherController
    private readonly movieRoute: MovieRoute
    private readonly weatherRoute: WeatherRoute

    constructor(private movieAdapter: IMoviePort, private weatherAdapter: IWeatherPort) {
        this.weatherMovieController = new WeatherMovieController(this.weatherAdapter, this.movieAdapter)
        this.weatherController = new WeatherController(this.weatherAdapter)
        this.movieRoute = new MovieRoute(this.weatherMovieController)
        this.weatherRoute = new WeatherRoute(this.weatherController)
    }

    start(app: Express) {
        app.use('/api/movies', this.movieRoute.getRoutes())
        app.use('/api/weather', this.weatherRoute.getRoutes())
    }
}