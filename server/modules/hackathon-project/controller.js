const HackathonProject = require('./model')

module.exports.getProjectsByEvent = async (req, res) => {
    const projects = await HackathonProject.find({ event: res.locals.event._id })
        .populate('event idea teamLead teamMembers')
    res.status(200).json(projects)
}
