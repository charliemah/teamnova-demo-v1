const MentorApplicant = require('./model')
const UserProfile = require('../profile/model')

module.exports.getApplicantsByProgram = async (req, res) => {
    const applicants = await MentorApplicant.find({ progKey: req.params.progKey })
    res.status(200).json(applicants)
}

module.exports.getMentorsByProgram = async (req, res) => {
    const mentors = await MentorApplicant.find({ 
        progKey: req.params.progKey,
        accepted: true,
    })
    res.status(200).json(mentors)
}

module.exports.apply = async (req, res) => {
    const { program } = res.locals
    const { name, isStudent, organization, title, location, timezone } = req.body.applicant
    const profile = await UserProfile.create({ 
        userId: req.user.id,
        email: req.user.email,
        name,
        isMentor: true,
        isStudent,
        organization,
        title,
        location,
        timezone,
    })
    const applicant = await MentorApplicant.create({
        progKey: req.params.progKey,
        userId: req.user.id,
        profile: profile._id,
    })
    program.mentorsAppliedCount++
    await program.save()
    res.status(201).json(applicant)
}

module.exports.accept = async (req, res) => {
    const { program, mentorApplicant } = res.locals
    mentorApplicant.accepted = true
    await mentorApplicant.save()
    program.mentorsAcceptedCount++
    await program.save()
    res.status(201).json(mentorApplicant)
}