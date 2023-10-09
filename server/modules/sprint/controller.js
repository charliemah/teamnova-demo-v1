const Sprint = require('./model')

module.exports.getSprintsByTeam = async (req, res) => {
    const sprints = await Sprint.find({ teamKey: req.params.teamKey })
        .populate({
            path: 'stories',
            populate: {
                path: 'reviewer',
                populate: {
                    path: 'mentor',
                },
            },
        })
        .populate({
            path: 'tasks',
            populate: {
                path: 'owner',
                populate: {
                    path: 'mentee',
                },
            },
        })
        .populate({
            path: 'tasks',
            populate: {
                path: 'story',
            },
        })
    res.status(200).json(sprints)
}

module.exports.createSprint = async (req, res) => {
    const team = res.locals.team
    const sprint = new Sprint(req.body.sprint)
    sprint.teamKey = team.key
    sprint.number = team.sprintsCount + 1
    await sprint.save()
    team.sprintsCount++
    await team.save()
    res.status(201).json(sprint)
}

module.exports.editSprint = async (req, res) => {
    const sprint = await Sprint.findByIdAndUpdate(
        res.locals.sprint.id,
        {...req.body.sprint}
        )
    res.status(200).json(sprint)
}
