import express from 'express'
import {uploadTask, getSingleTask, updateTask, deleteTask} from './../Controllers/taskController.js'

const taskRoute = express.Router()

taskRoute.post('/upload/:id', uploadTask)
taskRoute.get('/get-single/:id', getSingleTask)
taskRoute.put('/update/:id', updateTask)
taskRoute.delete('/delete/:id', deleteTask)

export default taskRoute