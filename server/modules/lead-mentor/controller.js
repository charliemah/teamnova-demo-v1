const LeadMentor = require('./model')
const UserProfile = require('../profile/model')

module.exports.claim = async (req, res) => {
    const email = req.user.email
    const { code, isStudent, organization, title, location, timezone } = req.body.leadMentor
    const leadMentor = await LeadMentor.findOne({ email, code })
    if (!leadMentor) {
        return res.status(404).json({ error: 'Invalid invite code' })
    }
    leadMentor.userId = req.user.id
    const profile = await UserProfile.create({ 
        userId: req.user.id,
        name: leadMentor.name,
        email,
        isMentor: true,
        isStudent,
        organization,
        title,
        location,
        timezone,
    })
    leadMentor.profile = profile._id
    leadMentor.claimed = true
    await leadMentor.save()
    return res.status(200).json(leadMentor)
}