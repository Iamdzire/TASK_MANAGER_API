import express from 'express'
import {registerUser, getAllUsers, getSingleUser, updateUser} from './../Controllers/userController.js'

const userRoute = express.Router()

userRoute.post('/register', registerUser)
userRoute.get('/get-all', getAllUsers)
userRoute.get('/get-single/:id', getSingleUser)
userRoute.put('/update/:id', updateUser)

export default userRoute