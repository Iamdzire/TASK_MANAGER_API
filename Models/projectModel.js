import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tasks'}]
})

const projectModel = mongoose.model('Projects', projectSchema, 'Projects')
export default projectModel