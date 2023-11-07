import 'dotenv/config'
import mongoose from 'mongoose'

const NODE_ENV = process.env.NODE_ENV

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.MONGO_CNN
    await mongoose.connect(DB_URI)
}

export default dbConnect