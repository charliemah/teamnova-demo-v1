const UserProfile = require('./model')

module.exports.showProfile = async (req, res) => {
    const profile = await UserProfile.findOne({ userId: req.user.id })
        .populate('links featuredProjects')
    return res.status(200).json(profile)
}

module.exports.updateProfile = async (req, res) => {
    const profile = await UserProfile.findOneAndUpdate(
        { userId: req.user.id },
        {...req.body.profile}
    )
    return res.status(200).json(profile)
}
