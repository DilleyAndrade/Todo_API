import express from 'express'
import dotenv from 'dotenv'
import { connectDatabase } from './config/dbConnect.js'
import taskRouter from './routes/task.js'
import errorMiddleware from './middlewares/error.js'

const app = express()
dotenv.config({ path: "backend/config/config.env" })

app.use(express.json())

connectDatabase()

app.use("/api/v1", taskRouter)

app.use(errorMiddleware)

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running in the PORT: ${process.env.PORT} on ${process.env.NODE_ENV}`
  )
})