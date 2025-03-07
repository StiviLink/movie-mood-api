import { createClient } from 'redis'
import dotenv from 'dotenv'
// domain
import WeatherResponse from "../../domain/models/Weather.js"
import * as process from "node:process";

dotenv.config()

const client = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
    }
});

client.on('error', err => console.log('Redis Client Error', err));

export const getCityWeather = async (city: string) : Promise<WeatherResponse | null> => {
    await client.connect();
    const result = await client.get(`weather-${city.toLowerCase()}`)
    await client.disconnect()
    return result && JSON.parse(result)
}

export const setCityWeather = async (city: string, data: WeatherResponse) => {
    await client.connect()
    await client.set(`weather-${city.toLowerCase()}`, JSON.stringify(data), { EX: 30*60 })
    await client.disconnect()
}

