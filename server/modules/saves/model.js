const mongoose = require('mongoose')

const SavesSchema = new mongoose.Schema({
    userId: { 
        type: String,
        required: true,
    },
    openRoles:  [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MenteeRole'
        }
    ],
})

SavesSchema.set('timestamps', true)

const Saves = mongoose.model('Saves', SavesSchema)

module.exports = Saves