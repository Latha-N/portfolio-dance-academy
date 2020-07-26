const User=require('../models/users')
const pick=require('lodash/pick')

module.exports.list = (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.register=function(req, res){
    let body = req.body
    const user = new User(body)
   // console.log('latha',user)
    user.save()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.login = (req, res) => {
    const body = req.body
    let user
    User.findByCredentials(body.email, body.password)   
    .then(userData => {
            user = pick(userData, ['_id', "username", "email", "mobile"])
            console.log(user)
            return userData.generateToken()
        })
      
            // .then(token => res.setHeader('x-auth', token).send({user}))
            .then(token => res.send({'user' : user, 'token' :token}))
            .catch(err => res.send(err))
            .catch(err => res.send(err))
  
}

module.exports.account = (req, res) => {
    // console.log('latha',req)
    res.send(req.user)
}

module.exports.logout = (req, res) => {
    const {user , token} = req
    User.findByIdAndUpdate(user._id, {$pull : {tokens : {token : token}}})
        .then(() => res.send({notice : 'user successfully logout'}))
        .catch(err => res.send(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then(user => user ? res.json(user) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.info = (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}
