import { Schema, Types, Model, model } from 'mongoose'
import { Car } from '../interfaces/car'

const ItemSchema = new Schema<Car>(
    {
        name: {
            type: String,
            required: [true, 'name is required']
        },
        description: {
            type: String,
            default: ''
        },
        gas: {
            type: String,
            enum: ['gasoline', 'electric'],
            default: 'gasoline',
        },
        color: {
            type: String,
            required: [true, 'color is required']
        },
        year: {
            type: Number,
            required: [true, 'year is required']
        },
        price: {
            type: Number,
            required: [true, 'price is required']
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ItemModel = model('items', ItemSchema)
export { ItemModel }