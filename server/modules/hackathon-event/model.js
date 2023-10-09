const mongoose = require('mongoose')

const HackathonEventSchema = new mongoose.Schema({
    program: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Program',
    },
    name: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
        unique: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        default: 'An example description',
    },
})

HackathonEventSchema.set('timestamps', true)

const HackathonEvent = mongoose.model('HackathonEvent', HackathonEventSchema)

module.exports = HackathonEvent