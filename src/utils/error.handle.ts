import { Response } from "express";

export const handleHTTPError = (res: Response, statusCode: number, errorMessage: string, errorRaw?: any) => {
    console.log(errorRaw)
    res.status(statusCode).send({errorMessage})
}