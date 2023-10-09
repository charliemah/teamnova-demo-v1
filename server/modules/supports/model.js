const mongoose = require('mongoose')

const SupportsSchema = new mongoose.Schema({
    userId: { 
        type: String,
        required: true,
    },
    teams: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team'
        }
    ],
})

SupportsSchema.set('timestamps', true)

const Supports = mongoose.model('Supports', SupportsSchema)

module.exports = Supports