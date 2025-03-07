import { Request, Response } from "express"

export default interface IWeatherControllerPort {
    getWeatherByCity(req: Request, res: Response): Promise<void>
}