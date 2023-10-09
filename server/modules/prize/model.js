const mongoose = require('mongoose')

const PrizeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    numOfWinners: {
        type: Number,
        default: 1,
    },
    description: {
        type: String,
        default: 'An example description',
    },
    isSponsorPrize: {
        type: Boolean,
        default: true,
    },
    sponsor: {
        type: String,
        default: 'Example Sponsor',
    },
    winners: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team',
        }
    ],
})

PrizeSchema.set('timestamps', true)

const Prize = mongoose.model('Prize', PrizeSchema)

module.exports = Prize