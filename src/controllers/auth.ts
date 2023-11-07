import { Request, Response } from 'express'
import { registerNewUser, loginUser } from '../services/auth'

const register = async (req: Request, res: Response) => {
    const responseUser = await registerNewUser(req.body)
    res.status(201).send({responseUser})
}

const login = async (req: Request, res: Response) => {
    const responseUser = await loginUser(req.body)
    if (responseUser === 'INCORRECT_PASSWORD') return res.status(403).send(responseUser)
    res.status(200).send(responseUser)
}

export { register, login }