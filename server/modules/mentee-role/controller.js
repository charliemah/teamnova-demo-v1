const MenteeRole = require('./model')

module.exports.getOpenRolesByTeam = async (req, res) => {
    const openRoles = await MenteeRole.find({ 
            teamKey: req.params.teamKey,
            openRole: true,
            active: true,
        })
    res.status(200).json(openRoles)
}

module.exports.getMenteesByTeam = async (req, res) => {
    const mentees = await MenteeRole.find({
            teamKey: req.params.teamKey,
            openRole: false,
            active: true,
        })
        .select('-requiredSkills -preferredSkills -description')
        .populate({
            path: 'mentee',
            populate: {
                path: 'profile',
                populate: {
                    path: 'links projects',
                },
            },
        })
    res.status(200).json(mentees)
}

module.exports.createOpenRole = async (req, res) => {
    const { team } = res.locals
    const openRole = new MenteeRole(req.body.role)
    openRole.teamKey = team.key
    openRole.number = team.menteeRoles.length + 1
    await openRole.save()
    team.openRolesCount++
    await team.save()
    res.status(201).json(openRole)
}

module.exports.match = async (req, res) => {
    const { team, openRole, mentee } = res.locals
    openRole.openRole = false
    openRole.mentee = mentee._id
    await openRole.save()
    mentee.role = openRole._id
    await mentee.save()
    team.openRolesCount--
    team.menteesCount++
    await team.save()
    res.status(200).json(openRole)
}

module.exports.editOpenRole = async (req, res) => {
    const openRole = await MenteeRole.findByIdAndUpdate(
        req.locals.role.id,
        {...req.body.role}
        )
    res.status(200).json(openRole)
}

