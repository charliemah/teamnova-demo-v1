const mongoose = require('mongoose')

const MenteeRoleSchema = new mongoose.Schema({
    teamKey: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    openRole: {
        type: Boolean,
        default: true,
    },
    name: {
        type: String,
        required: true,
        enum: ['Associate Scrum Master', 'Mentee Developer'],
    },
    topics: {
        type: [String],
    },
    requiredSkills: {
        type: [String],
        required: true,
    },
    preferredSkills: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        default: 'An example description',
    },
    mentee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenteeApplicant',
    },
    active: {
        type: Boolean,
        default: true,
    },
})

MenteeRoleSchema.set('timestamps', true)

const MenteeRole = mongoose.model('MenteeRole', MenteeRoleSchema)

module.exports = MenteeRole

