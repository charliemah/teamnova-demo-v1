const MentorRole = require('./model')

module.exports.getMentorsByTeam = async (req, res) => {
    const mentors = await MentorRole.find({
            teamKey: req.params.teamKey,
            active: true,
        })
        .populate({
            path: 'leadMentor',
            populate: {
                path: 'profile',
                populate: {
                    path: 'links featuredProjects',
                },
            },
        })
        .populate({
            path: 'mentor',
            populate: {
                path: 'profile',
                populate: {
                    path: 'links featuredProjects',
                },
            },
        })
    res.status(200).json(mentors)
}

module.exports.createRole = async (req, res) => {
    const { team, mentor } = res.locals
    const role = new MentorRole(req.body.role)
    role.teamKey = team.key
    role.isLeadMentor = false
    role.mentor = mentor._id
    role.number = team.mentorRoles.length + 1
    await role.save()
    team.mentorsCount++
    await team.save()
    mentor.roles.push(role)
    await mentor.save()
    res.status(201).json(role)
}