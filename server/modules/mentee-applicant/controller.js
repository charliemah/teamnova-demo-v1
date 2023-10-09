const MenteeApplicant = require('./model')
const UserProfile = require('../profile/model')

module.exports.getApplicantsByProgram = async (req, res) => {
    const applicants = await MenteeApplicant.find({ progKey: req.params.progKey })
    res.status(200).json(applicants)
}

module.exports.getCandidatesByProgram = async (req, res) => {
    const candidates = await MenteeApplicant.find({ 
        progKey: req.params.progKey,
        isCandidate: true,
    })
    res.status(200).json(candidates)
}

module.exports.apply = async (req, res) => {
    const { program } = res.locals
    const { name, isStudent, organization, title, location, timezone } = req.body.applicant
    const profile = await UserProfile.create({ 
        userId: req.user.id,
        email: req.user.email,
        name,
        isMentor: false,
        isStudent,
        organization,
        title,
        location,
        timezone,
    })
    const applicant = await MenteeApplicant.create({
        progKey: req.params.progKey,
        userId: req.user.id,
        profile: profile._id,
    })
    program.menteesAppliedCount++
    await program.save()
    res.status(201).json(applicant)
}

module.exports.accept = async (req, res) => {
    const { program, menteeApplicant } = res.locals
    menteeApplicant.accepted = true
    await menteeApplicant.save()
    program.menteesAcceptedCount++
    await program.save()
    res.status(201).json(menteeApplicant)
}

module.exports.graduate = async (req, res) => {
    const { program, menteeApplicant } = res.locals
    menteeApplicant.graduated = true
    await menteeApplicant.save()
    program.menteesGraduatedCount++
    await program.save()
    res.status(201).json(menteeApplicant)
}