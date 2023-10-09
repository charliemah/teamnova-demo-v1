const mongoose = require('mongoose')

const FollowsSchema = new mongoose.Schema({
    userId: { 
        type: String,
        required: true,
    },
    follows: {
        followableType: {
            type: String,
            required: true,
            enum: ['Team', 'UserProfile']
        },
        followableId: {
            type: String,
            required: true
        }
    }
})

FollowsSchema.set('timestamps', true)

const Follows = mongoose.model('Follows', FollowsSchema)

module.exports = Follows