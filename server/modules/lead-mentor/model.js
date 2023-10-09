const mongoose = require('mongoose')

const LeadMentorSchema = new mongoose.Schema({
    progKey: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        select: false,
    },
    claimed: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: String,
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    },
    teams: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team',
        }
    ],
})

LeadMentorSchema.set('timestamps', true)

const LeadMentor = mongoose.model('LeadMentor', LeadMentorSchema)

module.exports = LeadMentor