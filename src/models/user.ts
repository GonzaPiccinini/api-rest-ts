import { Schema, Types, Model, model } from 'mongoose'
import { User } from '../interfaces/user'

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: [true, 'name is required']
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'password is required']
        },
        age: {
            type: Number,
            requierd: [true, "age is required"]
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const UserModel = model('users', UserSchema)
export { UserModel }