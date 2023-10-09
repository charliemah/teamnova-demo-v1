const Follows = require('./model')
const Team = require('../team/model')
const UserProfile = require('../profile/model')

module.exports.toggle = async (req, res) => {
    const userId = req.user.id
    const followableType = res.locals.subjectType
    const followableId = res.locals.subjectId
    const doc = await Follows.findOne({
        userId,
        follows: { $elemMatch: { followableType, followableId }}
    })
    let hasFollowed = true
    if (!doc) {
        await Follows.findOneAndUpdate(
            { userId },
            { $push: { follows: { followableType, followableId } } },
            { upsert: true}
        )
        switch(followableType) {
            case 'Team':
                await Team.findByIdAndUpdate(
                    followableId,
                    { $inc: {'followersCount': 1 } }
                )
                break
            case 'UserProfile':
                await UserProfile.findByIdAndUpdate(
                    followableId,
                    { $inc: {'followersCount': 1 } }
                )
                break
        }
    } else {
        await Follows.findOneAndUpdate(
            { userId },
            { $pull: { follows: { followableType, followableId } } }
        )
        switch(followableType) {
            case 'Team':
                await Team.findByIdAndUpdate(
                    followableId,
                    { $inc: {'followersCount': -1 } }
                )
                break
            case 'UserProfile':
                await UserProfile.findByIdAndUpdate(
                    followableId,
                    { $inc: {'followersCount': -1 } }
                )
                break
        }
        hasFollowed = false
    }
    res.status(200).json(hasFollowed)
}

