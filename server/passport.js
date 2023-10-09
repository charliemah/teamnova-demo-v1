const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJwt = require('passport-jwt')
const ExtractJwt = passportJwt.ExtractJwt
const JwtStrategy = passportJwt.Strategy
const User = require('./modules/user/model')

passport.use(new LocalStrategy(
        { usernameField: 'email' },
        function(email, password, done) {
            User.findOne({ email: email.toLowerCase() }, function (err, user) {
            if (err) { return done(err) }
            if (!user) { return done(null, false) }
            if (!user.verifyPassword(password)) { return done(null, false) }
            return done(null, user)
            })
        }
    )
)
  
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET_TOKEN
opts.passReqToCallback = true
passport.use(new JwtStrategy(opts, function(req, jwt_payload, done) {
    User.findOne({_id: jwt_payload.userId}, function(err, user) {
        if (err) {
            return done(err, false)
        }
        if (user) {
            req.user = user
            return done(null, user)
        } else {
            return done(null, false)
        }
    })
}))

const authLocal = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })
module.exports = { authLocal, requireAuth }