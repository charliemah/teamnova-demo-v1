const UserStory = require('./model')

module.exports.createStory = async (req, res) => {
    const sprint = res.locals.sprint
    const story = new UserStory(req.body.story)
    story.teamKey = req.params.teamKey
    story.sprintNumber = req.params.sprintNumber
    story.number = sprint.stories.length + 1
    story.reviewer = res.locals.mentorDeveloper._id
    await story.save()
    sprint.stories.push(story)
    await sprint.save()
    res.status(201).json(story)
}

module.exports.editStory = async (req, res) => {
    const story = await UserStory.findByIdAndUpdate(
        res.locals.story.id,
        {...req.body.story}
        )
    res.status(200).json(story)
}

