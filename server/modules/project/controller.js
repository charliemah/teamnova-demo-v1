const Project = require('./model')
const UserProfile = require('../profile/model')

module.exports.createProject = async (req, res) => {
    const profile = await UserProfile.findOne({ userId: req.user.id })
    const project = await Project.create(req.body.project)
    profile.featuredProjects.push(project)
    await profile.save()
    res.status(201).json(project)
}

module.exports.editProject = async (req, res) => {
    const project = await Project.findByIdAndUpdate(
        req.params.projectId,
        {...req.body.project}
    )
    res.status(200).json(project)
}
