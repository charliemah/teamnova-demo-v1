const mongoose = require('mongoose')

const SprintSchema = new mongoose.Schema({
    teamKey: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    goal: {
        type: String,
        default: 'An example goal',
    },
    stories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserStory',
        }
    ],
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
        }
    ],
    active: {
        type: Boolean,
        default: false,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

SprintSchema.set('timestamps', true)

const Sprint = mongoose.model('Sprint', SprintSchema)

module.exports = Sprint