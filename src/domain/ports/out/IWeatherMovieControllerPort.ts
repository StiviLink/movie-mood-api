import { Request, Response } from "express"

export default interface IWeatherControllerPort {
    getWeatherMovieRecommendation(req: Request, res: Response): Promise<void>
}