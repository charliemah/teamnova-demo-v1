const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        default: 'An example tagline',
    },
    imageUrl: {
        type: String,
        default: './default_card_thumbnail.jpg',
    },
})

LinkSchema.set('timestamps', true)

const Link = mongoose.model('Link', LinkSchema)

module.exports = Link