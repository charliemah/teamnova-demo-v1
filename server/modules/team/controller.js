const Team = require('./model')
const MentorRole = require('../mentor-role/model')

module.exports.getTeamsByProgram = async (req, res) => {
    const teams = await Team.find({
            program: res.locals.program._id,
            active: true,            
        })
        .populate('program', 'name key')
        .populate({
            path: 'owner',
            model: 'LeadMentor',
            select: 'profile',
            populate: {
                path: 'profile',
                model: 'UserProfile',
                select: 'name avatarUrl location timezone',
            },
        })
    res.status(200).json(teams)
}

module.exports.createTeam = async (req, res) => {
    const { program, leadMentor } = res.locals
    const team  = new Team(req.body.team)
    team.program = program._id
    team.owner = leadMentor._id
    await team.save()
    leadMentor.teams.push(team)
    await leadMentor.save()
    const role = await MentorRole.create({
        teamKey: team.key,
        name: 'Product Owner',
        isLeadMentor: true,
        leadMentor: leadMentor._id,
    })
    team.mentorRoles.push(role)
    await team.save()
    program.teamsCount++
    await program.save()
    res.status(201).json(team)
}

module.exports.showTeam = async (req, res) => {
    const team = await Team.findById(res.locals.team.id)
        .populate({
            path: 'mentorRoles',
            populate: {
                path: 'leadMentor',
                populate: {
                    path: 'profile',
                    populate: {
                        path: 'links projects',
                    }
                },
            },
            populate: {
                path: 'mentor',
                populate: {
                    path: 'profile',
                    populate: {
                        path: 'links projects',
                    }
                },
            },
        })
        .populate({
            path: 'menteeRoles',
            populate: {
                path: 'mentee',
                populate: {
                    path: 'profile',
                    populate: {
                        path: 'links projects',
                    },
                },
            },
        })
    team.viewsCount++
    await team.save()
    res.status(200).json(team)
}

module.exports.updateTeam = async (req, res) => {
    const team = await Team.findByIdAndUpdate(
        res.locals.team.id,
        {...req.body.team}
    )
    res.status(200).json(team)
}