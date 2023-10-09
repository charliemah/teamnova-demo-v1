const Prize = require('./model')

module.exports.createPrize = async (req, res) => {
    const program = res.locals.program
    const prize  = new Prize(req.body.prize)
    await prize.save()
    program.prizes.push(prize)
    await program.save()
    res.status(201).json(prize)
}

module.exports.editPrize = async (req, res) => {
    const prize = await Prize.findByIdAndUpdate(
        res.locals.prize.id,
        {...req.body.prize}
        )
    res.status(200).json(prize)
}

