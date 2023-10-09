const authRouter = require('./user/routes')
const profileRouter = require('./profile/routes')
const programRouter = require('./program/routes')
const teamRouter = require('./team/routes')

module.exports = app => {
    app.get('/api/v1', (req, res) => {
        res.status(200).json({ message: 'Teamnova: Make Mentorship in Open Source Accessible for More Students' })
    })
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/profile', profileRouter)
    app.use('/api/v1/programs', programRouter)
    app.use('/api/v1/teams', teamRouter)
}