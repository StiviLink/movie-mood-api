import WeatherResponse from "../../models/Weather.js"

export default interface IWeatherPort {
    getWeatherByCity(city: string): Promise<WeatherResponse>
}