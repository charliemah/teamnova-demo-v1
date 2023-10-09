const mongoose = require('mongoose')

const MentorRoleSchema = new mongoose.Schema({
    teamKey: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        enum: ['Product Owner', 'Scrum Master', 'Mentor Developer'],
    },
    isLeadMentor: {
        type: Boolean,
        required: true,
    },
    leadMentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LeadMentor',
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MentorApplicant',
    },
    topics: {
        type: [String],
    },
    active: {
        type: Boolean,
        default: true,
    },
})

MentorRoleSchema.set('timestamps', true)

const MentorRole = mongoose.model('MentorRole', MentorRoleSchema)

module.exports = MentorRole

