import taskModel from './../Models/taskModel.js'
import projectModel from './../Models/projectModel.js'

export const uploadTask = async (req, res) => {
    try {
        const projectId = req.params.id
        const project = await projectModel.findById(projectId)
        if(!project){
            return res.status(404).json({
                Message: "project not found"
            })
        }
        const taskTitle = req.body.Title
        const taskDescription = req.body.Description
        const taskStatus = req.body.Status
        const task = await taskModel.create(
            {Title: taskTitle, Description: taskDescription, Status: taskStatus}
        )
        await project.Tasks.push(task._id)
        await project.save()
        return res.status(201).json({
            Message: "Task created successfully",
            Data: task
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}


export const getSingleTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const singleTask = await taskModel.findById(taskId)
        if(!singleTask){
            return res.status(404).json({
                Message: "Task not found"
            })
        }
        return res.status(200).json({
            Message: "Task found",
            Data: singleTask
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}


export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const taskTitle = req.body.Title
        const taskDescription = req.body.Description
        const taskStatus = req.body.Status
        const update = await taskModel.findByIdAndUpdate(taskId,
            {Title: taskTitle, Description: taskDescription, Status: taskStatus}, {returnDocument: 'after'}
        )
        return res.status(200).json({
            Message: "Task updated successfully",
            data: update
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}


export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const deleteTask = await taskModel.findByIdAndDelete(taskId)
        return res.status(200).json({
            Message: "Task deleted successfully",
            Data: deleteTask
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}