const UserProfile = require('./modules/profile/model')
const Program = require('./modules/program/model')
const LeadMentor = require('./modules/lead-mentor/model')
const Team = require('./modules/team/model')
const Prize = require('./modules/prize/model')
const MentorApplicant = require('./modules/mentor-applicant/model')
const MenteeApplicant = require('./modules/mentee-applicant/model')
const MentorRole = require('./modules/mentor-role/model')
const MenteeRole = require('./modules/mentee-role/model')
const Sprint = require('./modules/sprint/model')
const UserStory = require('./modules/story/model')
const Task = require('./modules/task/model')

module.exports.checkUserProfile = async (req, res, next) => {
    const profile = await UserProfile.findOne({ userId: req.params.id })
    if (!profile) {
        return res.status(404).json({ error: 'User profile not found' })
    }
    res.locals.profile = profile
    res.locals.subjectType = 'UserProfile'
    res.locals.subjectId = profile.id
    await next()
}

module.exports.checkProgram = async (req, res, next) => {
    const program = await Program.findOne({ key: req.params.progKey })
    if (!program) {
        return res.status(404).json({ error: 'Program not found' })
    }
    res.locals.program = program
    await next()
}

module.exports.checkLeadMentor = async (req, res, next) => {
    const leadMentor = await LeadMentor.findOne({ userId: req.params.userId })
    if (!leadMentor) {
        return res.status(404).json({ error: 'Lead mentor not found' })
    }
    res.locals.leadMentor = leadMentor
    await next()
}

module.exports.checkMentorApplicant = async (req, res, next) => {
    const mentorApplicant = await MentorApplicant.findOne({ 
        userId: req.params.userId,
    })
    if (!mentorApplicant) {
        return res.status(404).json({ error: 'Mentor applicant not found' })
    }
    res.locals.mentorApplicant = mentorApplicant
    await next()
}

module.exports.checkMenteeApplicant = async (req, res, next) => {
    const menteeApplicant = await MenteeApplicant.findOne({ 
        userId: req.params.userId,
    })
    if (!menteeApplicant) {
        return res.status(404).json({ error: 'Mentee applicant not found' })
    }
    res.locals.menteeApplicant = menteeApplicant
    await next()
}

module.exports.checkTeam = async (req, res, next) => {
    const team = await Team.findOne({ key: req.params.teamKey })
    if (!team) {
        return res.status(404).json({ error: 'Team not found' })
    }
    res.locals.team = team
    res.locals.subjectType = 'Team'
    res.locals.subjectId = team.id
    await next()
}

module.exports.checkAvailableMentor = async (req, res, next) => {
    const mentor = await MentorApplicant.findOne({
        userId: req.params.userId,
        accepted: true,
        available: true,
    })
    if (!mentor) {
        return res.status(404).json({ error: 'Mentor not found/available' })
    }
    res.locals.mentor = mentor
    await next()
}

module.exports.checkOpenRole = async (req, res, next) => {
    const openRole = await MenteeRole.findfindOne({
        teamKey: req.params.teamKey,
        number: req.params.roleNumber,
        openRole: true,
        active: true,
    })
    if (!openRole) {
        return res.status(404).json({ error: 'Open role not found' })
    }
    res.locals.openRole = openRole
    await next()
}

module.exports.checkAvailableMentee = async (req, res, next) => {
    const mentee = await MenteeApplicant.findOne({ 
        userId: req.params.userId,
        accepted: true,
        available: true,
    })
    if (!mentee) {
        return res.status(404).json({ error: 'Mentee not found' })
    }
    res.locals.mentee = mentee
    await next()
}

module.exports.checkPrize = async (req, res, next) => {
    const prize = await Prize.findOne({ key: req.params.prizeId })
    if (!prize) {
        return res.status(404).json({ error: 'Prize not found' })
    }
    res.locals.prize = prize
    await next()
}

module.exports.checkSprint = async (req, res, next) => {
    const sprint = await Sprint.findOne({
        teamKey: req.params.teamKey,
        number: req.params.sprintNumber,
    })
    if (!sprint) {
        return res.status(404).json({ error: 'Sprint not found' })
    }
    res.locals.sprint = sprint
    await next()
}

module.exports.checkStory = async (req, res, next) => {
    const story = await UserStory.findOne({
        teamKey: req.params.teamKey,
        sprintNumber: req.params.sprintNumber,
        number: req.params.storyNumber,
    })
    if (!story) {
        return res.status(404).json({ error: 'User story not found' })
    }
    res.locals.story = story
    await next()
}

module.exports.checkTask = async (req, res, next) => {
    const task = await Task.findOne({
        teamKey: req.params.teamKey,
        sprintNumber: req.params.sprintNumber,
        number: req.params.taskNumber,
    })
    if (!task) {
        return res.status(404).json({ error: 'Task not found' })
    }
    res.locals.task = task
    await next()
}

module.exports.isLeadMentorAccount = async (req, res, next) => {
    if (req.user.accountType !== 'LeadMentor') {
        return res.status(404).json({ error: 'You do not have permission to do that!' })
    }
    await next()
}

module.exports.isLeadMentor = async (req, res, next) => {
    const leadMentor = await LeadMentor.findOne({
        progKey: req.params.progKey,
        userId: req.user.id,
    })
    if (!leadMentor) {
        return res.status(404).json({ error: 'You do not have permission to do that!' })
    }
    res.locals.leadMentor = leadMentor
    await next()
}

module.exports.isTeamOwner = async (req, res, next) => {
    const leadMentor = await LeadMentor.findOne({ userId: req.user._id })
    if (!leadMentor) {
        return res.status(404).json({ error: 'You do not have permission to do that!' })
    }
    if (!res.locals.team.owner.equals(leadMentor._id)) {
        return res.status(403).json({ error: 'You do not have permission to do that!' })
    }
    res.locals.productOwner = leadMentor
    await next()
}

module.exports.isMentorAccount = async (req, res, next) => {
    if (req.user.accountType !== 'Mentor') {
        return res.status(404).json({ error: 'You do not have permission to do that!' })
    }
    await next()
}

module.exports.isMentorDeveloper = async (req, res, next) => {
    const mentor = await MentorApplicant.findOne({ 
        userId: req.user.id,
        accepted: true,
    })
    if (!mentor) {
        return res.status(404).json({ error: 'You do not have permission to do that!' })
    }
    const role = await MentorRole.findOne({
        teamKey: req.params.teamKey,
        mentor: mentor._id,
        active: true,
    })
    if (!role) {
        return res.status(403).json({ error: 'You do not have permission to do that!' })
    }
    res.locals.mentorDeveloper = mentorDeveloper
    await next()
}

module.exports.isStoryReviewer = async (req, res, next) => {
    const { mentorDeveloper, story } = res.locals
    if (!story.reviewer.equals(mentorDeveloper._id)) {
        return res.status(403).json({ error: 'You do not have permission to do that!' })
    }
    await next()
}

module.exports.isMenteeAccount = async (req, res, next) => {
    if (req.user.accountType !== 'Mentee') {
        return res.status(404).json({ error: 'You do not have permission to do that!' })
    }
    await next()
}

module.exports.isMenteeDeveloper = async (req, res, next) => {
    const mentee = await MentorApplicant.findOne({ 
        userId: req.user.id,
        accepted: true,
    })
    if (!menteeDeveloper) {
        return res.status(404).json({ error: 'You do not have permission to do that!' })
    }
    const role = await MentorRole.findOne({
        teamKey: req.params.teamKey,
        mentee: mentee._id,
        active: true,
    })
    if (!role) {
        return res.status(403).json({ error: 'You do not have permission to do that!' })
    }
    res.locals.menteeDeveloper = menteeDeveloper
    await next()
}

module.exports.isTaskOwner = async (req, res, next) => {
    const { menteeDeveloper, task } = res.locals
    if (!task.owner.equals(menteeDeveloper._id)) {
        return res.status(403).json({ error: 'You do not have permission to do that!' })
    }
    await next()
}




