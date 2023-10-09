const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    teamKey: {
        type: String,
        required: true,
    },
    sprintNumber: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenteeRole',
    },
    name: {
        type: String,
        required: true,
    },
    story: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,        
        ref: 'UserStory',
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
    },
    dueDate: {
        type: Date,
    },
    description: {
        type: String,
        default: 'An example description',
    },
    status: {
        type: String,
        enum: ['To-Do', 'Doing', 'Done'],
        default: 'To-Do',
    },
})

TaskSchema.set('timestamps', true)

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task