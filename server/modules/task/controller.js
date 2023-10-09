const Task = require('./model')

module.exports.createTask = async (req, res) => {
    const { menteeDeveloper, sprint } = res.locals
    const task = new Task(req.body.task)
    task.teamKey = req.params.teamKey
    task.sprintNumber = req.params.sprintNumber
    task.number = sprint.tasks.length + 1
    task.owner = menteeDeveloper._id
    await task.save()
    sprint.tasks.push(task)
    await sprint.save()
    res.status(201).json(task)
}

module.exports.editTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        res.locals.task.id,
        {...req.body.task}
        )
    res.status(200).json(task)
}
  


