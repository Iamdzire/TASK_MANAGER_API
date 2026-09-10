import express from 'express'
import {uploadProject, getSingleProject, updateProject, deleteProject} from './../Controllers/projectController.js'

const projectRoute = express.Router()

projectRoute.post('/upload/:id', uploadProject)
projectRoute.get('/get-single/:id', getSingleProject)
projectRoute.put('/update/:id', updateProject)
projectRoute.delete('/delete/:id', deleteProject)

export default projectRoute