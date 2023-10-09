const Program = require('./model')

module.exports.getAllPrograms = async (req, res) => {
    const programs = await Program.find({})
        .populate({
            path: 'leadMentors',
            populate: {
                path: 'profile',
                populate: {
                    path: 'links featuredProjects',
                }
            },
        })
        .populate('prizes')
    res.status(200).json(programs)
}

module.exports.showProgram = async (req, res) => {
    const program = await Program.findById(res.locals.program.id)
        .populate({
            path: 'leadMentors',
            populate: {
                path: 'profile',
                populate: {
                    path: 'links featuredProjects',
                }
            },
        })
        .populate('prizes')
    res.status(200).json(program);
}




