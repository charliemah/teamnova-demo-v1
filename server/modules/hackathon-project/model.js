const mongoose = require('mongoose')

const HackathonProjectSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'HackathonEvent',
    },
    idea: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ProjectIdea',
    },
    teamLead: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'MenteeApplicant',
    },
    name: {
        type: String,
        required: true,
    },
    teamMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MenteeApplicant',
        }
    ],
    tagline: {
        type: String,
        default: 'An example tagline',
    },
    imageUrl: {
        type: String,
        default: './default_card_thumbnail.jpg',
    },
    demoUrl: {
        type: String,
        default: 'https://www.digitalocean.com/',
    },
    repoUrl: {
        type: String,
        default: 'https://www.github.com/',
    },
    description: {
        type: String,
        default: 'An example description',
    },
    featuredSkills: {
        type: [String],
        required: true,
    },
    finalist: {
        type: Boolean,
        default: false,
    },
    winner: {
        type: Boolean,
        default: false,
    },
})

HackathonProjectSchema.set('timestamps', true)

const HackathonProject = mongoose.model('HackathonProject', HackathonProjectSchema)

module.exports = HackathonProject