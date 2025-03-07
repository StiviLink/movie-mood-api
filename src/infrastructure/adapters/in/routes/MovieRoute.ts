import { Router, Request, Response } from "express"
// controllers
import WeatherMovieController from "../controllers/WeatherMovieController.js"
// middlewares
import { validateCityRules, weatherValidator } from "../middlewares/weatherValidator.js"

export default class MovieRoute {
    private router = Router()
    private readonly getWeatherMovieRecommendation
    constructor(private weatherMovieController: WeatherMovieController) {
        this.getWeatherMovieRecommendation = (req: Request, res: Response) => this.weatherMovieController
            .getWeatherMovieRecommendation(req, res)
    }

    getRoutes() {
        this.router.get('/recommend/:city', validateCityRules, weatherValidator, this.getWeatherMovieRecommendation)
        return this.router
    }
}