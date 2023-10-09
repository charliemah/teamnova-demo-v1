const mongoose = require('mongoose')

const UserStorySchema = new mongoose.Schema({
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
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MentorRole',
    },
    content: {
        type: String,
        default: 'As a… I want to… So That…',
    },
    storyPoints:  {
        type: Number,
        default: 13,
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
    },
})

UserStorySchema.set('timestamps', true)

const UserStory = mongoose.model('UserStory', UserStorySchema)

module.exports = UserStory