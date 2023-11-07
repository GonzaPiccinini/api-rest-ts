import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHTTPError } from "../utils/error.handle";

interface RequestExtended extends Request {
    user?: string | JwtPayload
}

const getOrders = async (req: RequestExtended, res: Response) => {
    try {
        res.send({
            message: 'Only authorized people can see this message!',
            user: req.user
        })
    } catch (error) {
        handleHTTPError(res, 500, 'ERROR_GET_ORDER')
    }
}

export {
    getOrders
}