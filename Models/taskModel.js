import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Status: {type: String, required: true,
        enum: ['In-Process', 'Completed'], default: 'In-Process'}
})

const taskModel = mongoose.model('Tasks', taskSchema, 'Tasks')
export default taskModel