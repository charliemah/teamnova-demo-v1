const HackathonEvent = require('./model')

module.exports.getAllEvents = async (req, res) => {
    const events = await HackathonEvent.find({})
        .sort({ createdAt: -1 })
        .exec()   
    res.status(200).json(events)
}




