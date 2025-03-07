import { Request, Response } from "express"
// domain
import WeatherMovieService from "../../../../domain/services/WeatherMovieService.js"
import IWeatherPort from "../../../../domain/ports/out/IWeatherPort.js"
import IMoviePort from "../../../../domain/ports/out/IMoviePort.js"
import IWeatherMovieControllerPort from "../../../../domain/ports/out/IWeatherMovieControllerPort.js"

export default class WeatherMovieController implements IWeatherMovieControllerPort{
    private weatherMovieService: WeatherMovieService

    constructor(weatherPort: IWeatherPort, moviePort: IMoviePort) {
        this.weatherMovieService = new WeatherMovieService(weatherPort, moviePort)
    }

    async getWeatherMovieRecommendation(req: Request, res: Response) {
        try {
            const { city } = req.params
            const { page } = req.query
            res.status(200).json(await this.weatherMovieService.getWeatherMovieRecommendation(`${city}`, Number(page) || 1))
        }
        catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    }
}