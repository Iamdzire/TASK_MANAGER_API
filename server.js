import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import userRoute from './Routes/userRoute.js'
import projectRoute from './Routes/projectRoute.js'
import taskRoute from './Routes/taskRoute.js'

const compass_string = "mongodb://localhost:27017/Task_Manager_API"

const mongooseConnect = process.env.MONGO_URL

const onSuccess = () => console.log("MongoDB connected")
const onFailure = () => console.error("Connection failed")

mongoose.connect(mongooseConnect)
                                .then(onSuccess)
                                .catch(onFailure)
const app = express()
const port = 3000

app.use(express.json())
app.get('/message', (req, res) => res.send("Server is active"))
app.use('/users', userRoute)
app.use('/projects', projectRoute)
app.use('/tasks', taskRoute)

app.listen(port, () => console.log("Server is listening on port " + port))