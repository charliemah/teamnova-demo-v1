const mongoose = require('mongoose')

const MenteeApplicantSchema = new mongoose.Schema({
    progKey: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    },
    hackathonProjects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'HackathonProject',
        }
    ],
    isCandidate: {
        type: Boolean,
        default: false,
    },
    accepted: {
        type: Boolean,
        default: false,
    },
    available: {
        type: Boolean,
        default: true,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenteeRole',
    },
    graduated: {
        type: Boolean,
        default: false,
    },
})

MenteeApplicantSchema.set('timestamps', true)

const MenteeApplicant = mongoose.model('MenteeApplicant', MenteeApplicantSchema)

module.exports = MenteeApplicant