import IWeatherPort from "../ports/out/IWeatherPort.js"
import WeatherResponse from "../models/Weather.js"

export default class WeatherService {
    constructor(private weatherPort: IWeatherPort) {}

    async getWeatherByCity(city: string) : Promise<WeatherResponse> {
        return this.weatherPort.getWeatherByCity(city)
    }
}