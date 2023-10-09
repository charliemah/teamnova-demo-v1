const mongoose = require('mongoose')

const ProgramSchema = new mongoose.Schema({
    openSourceOrg: {
        type: String,
        required: true,
    },
    openSourceProj: {
        type: String,
        required: true,
    },
    repoUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
        unique: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    logoUrl: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    discordServerUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    leadMentorsCount: {
        type: Number,
        default: 0,
    },
    leadMentors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LeadMentor',
        }
    ],
    mentorsAppliedCount: {
        type: Number,
        default: 0,
    },
    mentorsAcceptedCount: {
        type: Number,
        default: 0,
    },
    teamsCount: {
        type: Number,
        default: 0,
    },
    openRolesCount: {
        type: Number,
        default: 0,
    },
    menteesAppliedCount: {
        type: Number,
        default: 0,
    },
    menteesAcceptedCount: {
        type: Number,
        default: 0,
    },
    menteesGraduatedCount: {
        type: Number,
        default: 0,
    },
    prizes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Prize',
        }
    ],
})

ProgramSchema.set('timestamps', true)

const Program = mongoose.model('Program', ProgramSchema)

module.exports = Program