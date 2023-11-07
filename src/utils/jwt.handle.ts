import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || "token.0101010"

const generateToken = (payloadEmail: string) => {
    const jwt = sign({payloadEmail}, JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '2h'
    })
    return jwt
}

const verifyToken = (token: string) => {
    const userJWT = verify(token, JWT_SECRET)
    return userJWT
}

export { generateToken, verifyToken }