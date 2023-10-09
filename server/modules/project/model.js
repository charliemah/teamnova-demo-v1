const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    role: {
        type: String,
        required: true,
    },
    contribution: {
        type: String,
        default: 'An example contribution description',
    },
    featuredSkills: {
        type: [String],
        required: true,
    },
})

ProjectSchema.set('timestamps', true)

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project