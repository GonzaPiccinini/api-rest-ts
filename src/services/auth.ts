import { Auth } from "../interfaces/auth"
import { User } from "../interfaces/user"
import { UserModel } from "../models/user"
import { encrypt, verify } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ({ name, email, password, age }: User) => {
    const user = await UserModel.findOne({"email": email})
    if (user) return 'ALREADY_USER'
    const hashedPassword = await encrypt(password)
    password = hashedPassword
    const registeredUser = await UserModel.create({
        name,
        email,
        password,
        age
    })
    return registeredUser
}

const loginUser = async ({ email, password }: Auth) => {
    const user = await UserModel.findOne({"email": email})
    if (!user) return 'USER_NOT_FOUND' 

    const hashedPassword = user.password
    if (!await verify(hashedPassword, password)) return 'INCORRECT_PASSWORD'
    
    const token = generateToken(user.email)
    const data = {
        token,
        user
    }

    return data
}

export { registerNewUser, loginUser }