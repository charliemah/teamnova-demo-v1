const Supports = require('./model')
const Team = require('../team/model')

module.exports.toggle = async (req, res) => {
    const userId = req.user.id
    const team = res.locals.team
    const doc = await Supports.findOne({
        userId,
        teams: { $in: team._id }
    })
    let hasSupported = true;
    if (!doc) {
        await Supports.findOneAndUpdate(
            { userId },
            { $push: { teams: team._id } },
            { upsert: true}
        )
        await Team.findByIdAndUpdate(
            team.id,
            { $inc: { 'supportersCount': 1 } }
        )
    } else {
        await Supports.findOneAndUpdate(
            { userId },
            { $pull: { teams: team._id } }
        )
        await Team.findByIdAndUpdate(
            team.id,
            { $inc: { 'supportersCount': -1 } }
        )
        hasSupported = false
    }
    res.status(200).json(hasSupported)
}

