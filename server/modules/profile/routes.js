const express = require('express')
const router = express.Router()
const ProfileController = require('./controller')
const LinkController = require('../link/controller')
const ProjectController = require('../project/controller')
const catchAsync = require('../../utils/catchAsync')
const { requireAuth } = require('../../passport')

router.get('/me', requireAuth, catchAsync(ProfileController.showProfile))

router.post('/me/links', requireAuth, catchAsync(LinkController.createLink))
router.post('/me/projects', requireAuth, catchAsync(ProjectController.createProject))

router.put('/me', requireAuth, catchAsync(ProfileController.updateProfile))
router.put('/me/links/:linkId', requireAuth, catchAsync(LinkController.editLink))
router.put('/me/projects/:projectId', requireAuth, catchAsync(ProjectController.editProject))

module.exports = router