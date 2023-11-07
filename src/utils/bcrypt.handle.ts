import { hash, compare } from 'bcryptjs'

const encrypt = async (password: string) => {
    const hashedPassword = await hash(password, 8)
    return hashedPassword
}

const verify = async (hashedPassword: string, password: string) => {
    const isValid = await compare(password, hashedPassword)
    return isValid
}

export { encrypt, verify }