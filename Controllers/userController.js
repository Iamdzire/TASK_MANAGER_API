import userModel from './../Models/userModel.js'

export const registerUser = async (req, res) => {
    try {
        const userName = req.body.Name
        const userGender = req.body.Gender
        const userAge = req.body.Age
        const register = await userModel.create(
            {Name: userName, Gender: userGender, Age: userAge}
        )
        return res.status(201).json({
            Message: "User created successfully",
            Data: register
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}


export const getAllUsers = async (req, res) => {
    try {
        const getAll = await userModel.find()
        return res.status(200).json({
            Message: "All users fetched successfully",
            Data: getAll
        })
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}


export const getSingleUser = async (req, res) => {
    try {
        const userId = req.params.id
        const getSingle = await userModel.findById(userId).populate('Projects')
        if(!getSingle){
            return res.status(404).json({
                Message: "User not found"
            })
        }
        return res.status(200).json({
            Message: "User Found",
            Data: getSingle
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}


export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id
        const userName = req.body.Name
        const userGender = req.body.Gender
        const userAge = req.body.Age
        const update = await userModel.findByIdAndUpdate(userId,
            {Name: userName, Gender: userGender, Age: userAge}, {returnDocument: 'after'}
        )
        return res.status(200).json({
            Message: "User updated successfully",
            Data: update
        })
    }catch(error){
        return res.status(500).json({
            Message: error.message
        })
    }
}