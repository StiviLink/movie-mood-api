import { Router, Request, Response } from "express"
// controllers
import WeatherController from "../controllers/WeatherController.js"

export default class WeatherRoute {
    private readonly router = Router()
    private readonly getWeatherByCity

    constructor(private weatherController: WeatherController) {
        this.getWeatherByCity = (req: Request, res: Response) => this.weatherController.getWeatherByCity(req, res)
    }

    getRoutes() {
        this.router.get('/', this.getWeatherByCity)
        return this.router
    }
}