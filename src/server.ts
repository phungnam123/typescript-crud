import dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })
import express from 'express'
import morgan from 'morgan'
import connectDB from './db/connect'
import employeeRoute from './router/index'

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

// routes

app.use('/api/v1/employee', employeeRoute)

// db
const PORT = process.env.PORT || 8080
const startDB = async () => {
  try {
    await connectDB(process.env.MONGo_URI)
    console.log('Mongodb is connected!!!')
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`)
    })
  } catch (error) {
    console.log(error)
  }
}
// connecting to Mongodb and starting the server
startDB()
