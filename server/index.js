if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const ExpressError = require('./utils/ExpressError')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})

mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', () => {
    console.log('Database connected')
})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(passport.initialize())

// API routes
require('./modules/routes')(app)

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next)=> {
    res.status(err.status || 500).json({ error: 'Something went wrong' })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})