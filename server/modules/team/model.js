const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    program: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Program',
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'LeadMentor',
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
    tagline: {
        type: String,
        required: true,
    },
    logoUrl: {
        type: String,
        default: './default_team_thumbnail.jpg'
    },
    imageUrl: {
        type: String,
        default: './default_team_thumbnail.jpg',
    },
    mission: {
        type: String,
        default: 'An example mission',
    },
    topics: {
        type: [String],
    },
    viewsCount: {
        type: Number,
        default: 0,
    },
    mentorsCount: {
        type: Number,
        default: 0,
    },
    openRolesCount: {
        type: Number,
        default: 0,
    },
    menteesCount: {
        type: Number,
        default: 0,
    },
    sprintsCount: {
        type: Number,
        default: 0,
    },
    followersCount: {
        type: Number,
        default: 0,
    },
    supportersCount: {
        type: Number,
        default: 0,
    },
    active: {
        type: Boolean,
        default: true,
    },
    winner: {
        type: Boolean,
        default: false,
    },
})

TeamSchema.set('timestamps', true)

const Team = mongoose.model('Team', TeamSchema)

module.exports = Team