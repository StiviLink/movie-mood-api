import axios, { AxiosInstance } from "axios"
// domain
import IWeatherPort from "../../../domain/ports/out/IWeatherPort.js"
import WeatherResponse from "../../../domain/models/Weather.js"
// utils
import { setCityWeather, getCityWeather } from "../../utils/redis.js"

export default class OpenWeatherAdapter implements IWeatherPort {
    private readonly apiKey: string
    private baseUrl: string = "https://api.openweathermap.org/data/2.5"
    private axiosClient: AxiosInstance

    constructor(apiKey: string) {
        this.apiKey = apiKey
        this.axiosClient = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async getWeatherByCity(city: string) {
        let weather = await getCityWeather(city)
        if(!weather) {
            console.log(`Fetching weather for ${city}...`)
            weather = (await this.axiosClient.get<WeatherResponse>(`/weather?q=${city}&appid=${this.apiKey}`))?.data
            await setCityWeather(city, weather)
        }
        return weather
    }
}