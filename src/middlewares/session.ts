import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHTTPError } from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExtended extends Request {
    user?: string | JwtPayload
}

const checkJWT = (req: RequestExtended, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization || ''
        const token = authHeader.split(' ').pop()
        
        const userJWT = verifyToken(`${token}`) // para indicar que el valor sera siempre un string

        if (!userJWT) throw new Error()
        
        req.user = userJWT
        next()
    } catch (error) {
        handleHTTPError(res, 400, 'INVALID JWT', error)
    }
}

export { checkJWT }