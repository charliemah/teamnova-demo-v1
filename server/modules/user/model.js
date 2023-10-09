const mongoose = require('mongoose')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    accountType: {
        type: String,
        required: true,
        enum: ['LeadMentor', 'Mentor', 'Mentee'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10)
    }
    return next()
})

UserSchema.methods = {
    verifyPassword(password) {
        return bcrypt.compareSync(password, this.password)
    },
    createToken() {
        return jwt.sign(
            { userId: this.id, accountType: this.accountType }, 
            process.env.SECRET_TOKEN,
            { expiresIn: '8h' },
        )
    },
    toAuthJSON() {
        const userObject ={
            userId: this.id,
            accountType: this.accountType,
            email: this.email,
            token: `${this.createToken()}`,
        }
        return userObject
    },
    toJSON() {
        const userObject ={
            userId: this.id,
            accountType: this.accountType,
            email: this.email,
        }
        return userObject
    },
}

UserSchema.set('timestamps', true)

const User = mongoose.model('User', UserSchema)

module.exports = User