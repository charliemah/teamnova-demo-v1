const mongoose = require('mongoose')

const ProjectIdeaSchema = new mongoose.Schema({
    programKey: {
        type: String,
        required: true,
    },
    leadMentor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'LeadMentor',
    },
    name: {
        type: String,
        required: true,
    },
    mentors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MentorApplicant',
        }
    ],
    description: {
        type: String,
        default: 'An example description',
    },
    desirableSkills: {
        type: [String],
        required: true,
    },
})

ProjectIdeaSchema.set('timestamps', true)

const ProjectIdea = mongoose.model('ProjectIdea', ProjectIdeaSchema)

module.exports = ProjectIdea