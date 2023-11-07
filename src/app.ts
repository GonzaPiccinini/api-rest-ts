import 'dotenv/config'
import dbConnect from './config/mongo'
import express from 'express'
import cors from 'cors'
import { router } from './routes'

const PORT = process.env.PORT || 8080

dbConnect()
.then(() => console.log('Database connected'))
.catch(error => {
    console.error(error)
    process.exit(1)
})

const app = express()

app.use(cors({
    origin: '*'
}))

app.use(express.json())

app.use(router)

app.listen(PORT, () => {
    console.log(`Server running at :${PORT}`)
})