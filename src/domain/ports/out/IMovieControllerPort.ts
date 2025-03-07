import { Request, Response} from "express"

export default interface IMovieControllerPort {
    getMovieById(req: Request, res: Response): Promise<void>
    getMoviesByTitle(req: Request, res: Response): Promise<void>
    getMoviesByGenres(req: Request, res: Response): Promise<void>
}