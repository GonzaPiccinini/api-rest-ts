import { NextFunction, Request, Response } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.name) return res.status(400).send('CONTROLLER WAS BLOCKED BY MIDDLEWARE!!!')
    next()
}

export { logMiddleware }