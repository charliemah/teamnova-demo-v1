const ProjectIdea = require('./model')

module.exports.getIdeasByEvent = async (req, res) => {
    const ideas = await ProjectIdea.find({ idea: res.locals.idea._id })
        .populate('leadMentor mentors')
    res.status(200).json(ideas)
}
