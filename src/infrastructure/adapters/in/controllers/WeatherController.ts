import { Request, Response } from "express"
// domain
import WeatherService from "../../../../domain/services/WeatherService.js"
import IWeatherPort from "../../../../domain/ports/out/IWeatherPort.js"
import IWeatherControllerPort from "../../../../domain/ports/out/IWeatherControllerPort.js"

export default class WeatherController implements IWeatherControllerPort {
    private weatherService: WeatherService

    constructor(weatherPort: IWeatherPort) {
        this.weatherService = new WeatherService(weatherPort)
    }

    async getWeatherByCity(req: Request, res: Response) {
        try {
            const { city } = req.query
            if (!city) {
                res.status(400).json({error: 'City is required'})
                return
            }
            res.status(200).json(await this.weatherService.getWeatherByCity(`${city}`))
        }
        catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    }
}