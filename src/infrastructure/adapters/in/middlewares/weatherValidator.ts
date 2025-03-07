// Express
import { Request, Response, NextFunction } from "express"
import { ValidationChain, param, validationResult } from 'express-validator'

export const validateCityRules: ValidationChain[] = [
    param('city')
        .trim()
        .isString().withMessage(`City must be a string`)
        .matches(/^[A-ZÀ-ÖØ-Ÿa-zà-öø-ÿ' -]+(?: ?[A-ZÀ-ÖØ-Ÿa-zà-öø-ÿ' -]+)*$/).withMessage(`You entered an invalid city`)
        .escape()
]

export const weatherValidator = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) next()
    else res.status(400).json({error: errors.array()})
}