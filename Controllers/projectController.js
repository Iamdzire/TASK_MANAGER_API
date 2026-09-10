import projectModel from './../Models/projectModel.js'
import userModel from './../Models/userModel.js'

export const uploadProject = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await userModel.findById(userId)
        if(!user){
            return res.status(404).json({
                Message: "User not found"
            })
        }
        const projectName = req.body.Name
        const project = await projectModel.create(
            {Name: projectName}
        )
        await user.Projects.push(project._id)
        await user.save()
        return res.status(201).json({
            Message: "Project uploaded successfully",
            Data: project
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}

export const getSingleProject = async (req, res) => {
    try {
        const projectId = req.params.id
        const project = await projectModel.findById(projectId).populate('Tasks')
        if(!project){
            return res.status(404).json({
                Message: "Project not found"
            })
        }
        return res.status(200).json({
            Message: "Project found",
            Data: project
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}


export const updateProject = async (req, res) => {
    try {
        const projectId = req.params.id
        const projectName = req.body.Name
        const update = await projectModel.findByIdAndUpdate(projectId, 
            {Name: projectName}, {returnDocument: 'After'}
        )
        return res.status(200).json({
            Message: "Project updated successfully",
            Data: update
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}


export const deleteProject = async (req, res) => {
    try {
        const projectId = req.params.id
        const deleteProject = await projectModel.findByIdAndDelete(projectId)
        return res.status(200).json({
            Message: "Project deleted successfully",
            Data: deleteProject
        })
    }catch(error){
        return res(500).json({
            Message: error.message
        })
    }
}