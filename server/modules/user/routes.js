const express = require('express')
const router = express.Router()
const UserController = require('./controller')
const catchAsync = require('../../utils/catchAsync')
const { authLocal, requireAuth } = require('../../passport')

router.get('/user', requireAuth, catchAsync(UserController.getCurrentUser))

router.post('/signup', catchAsync(UserController.signUp))
router.post('/signin', authLocal, catchAsync(UserController.signIn))

module.exports = router