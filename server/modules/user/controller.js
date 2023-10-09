const User = require('./model')

module.exports.signUp = async (req, res) => {
    const { accountType, email, password } = req.body
    const user = await User.create({ 
        accountType,
        email: email.toLowerCase(), 
        password,
    })
    res.status(201).json(user.toAuthJSON())
}
  
module.exports.signIn = (req, res) => {
    res.status(200).json(req.user.toAuthJSON())
}

module.exports.getCurrentUser = async (req, res) => {
    res.status(200).json(req.user)
}





  

 


