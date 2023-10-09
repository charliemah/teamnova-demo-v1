const Saves = require('./model')

module.exports.toggle = async (req, res) => {
    const userId = req.user.id
    const openRole = res.locals.openRole
    const doc = await Saves.findOne({
        userId,
        openRoles: { $in: openRole._id }
    })
    let hasSupported = true;
    if (!doc) {
        await Saves.findOneAndUpdate(
            { userId },
            { $push: { openRoles: openRole._id } },
            { upsert: true}
        )
    } else {
        await Saves.findOneAndUpdate(
            { userId },
            { $pull: { openRoles: openRole._id } }
        )
        hasSupported = false
    }
    res.status(200).json(hasSupported)
}

