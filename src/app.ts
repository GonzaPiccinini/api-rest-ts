import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import dbConnect from './config/mongo'

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

dbConnect()
.then(() => console.log('Database connected'))
.catch(error => {
    console.log(error)
})

app.listen(PORT, () => {
    console.log(`Server running at :${PORT}`)
})