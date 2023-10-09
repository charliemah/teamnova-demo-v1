const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    progKey: {
        type: String,
        required: true,
    },
    mentorProfileId: { 
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenteeApplicant',
    },
    content: {
        type: String,
        required: true
    },
})

ReviewSchema.set('timestamps', true)

const Review = mongoose.model('Review', ReviewSchema)

module.exports = Review