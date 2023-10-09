const mongoose = require('mongoose')

const UserProfileSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    discordUsername: {
        type: String,
        default: 'discord',
    },
    avatarUrl: {
        type: String,
        default: 'https://joeschmoe.io/api/v1/random',
    },
    isMentee: {
        type: Boolean,
        required: true,
    },
    isStudent: {
        type: Boolean,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    timezone: {
        type: String,
        required: true,
    },
    featuredSkills: {
        type: [String],
    },
    headline: {
        type: String,
        default: 'An example headline',
    },
    bio: {
        type: String,
        default: 'An example bio',
    },
    links: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Link',
        }
    ],
    featuredProjects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
        }
    ],
    followersCount: {
        type: Number,
        default: 0,
    },
    reviewsCount: {
        type: Number,
        default: 0,
    },
})

UserProfileSchema.set('timestamps', true)

const UserProfile = mongoose.model('UserProfile', UserProfileSchema)

module.exports = UserProfile