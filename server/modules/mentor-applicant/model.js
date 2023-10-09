const mongoose = require('mongoose')

const MentorApplicantSchema = new mongoose.Schema({
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
    accepted: {
        type: Boolean,
        default: false,
    },
    available: {
        type: Boolean,
        default: true,
    },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MentorRole',
        }
    ],
})

MentorApplicantSchema.set('timestamps', true)

const MentorApplicant = mongoose.model('MentorApplicant', MentorApplicantSchema)

module.exports = MentorApplicant