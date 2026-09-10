import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Gender: {type: String, required: true},
    Age: {type: Number, required: false},
    Projects: [{type: mongoose.Schema.Types.ObjectId, ref: 'Projects'}]
})

const userModel = mongoose.model('Users', userSchema, 'Users')
export default userModel