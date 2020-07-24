const Coacher=require('../models/coacher')

module.exports.list=(req,res)=>{
    
    Coacher.find()
    .then(coachers=>{
        res.json(coachers)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Coacher.findOne({_id : id, user : req.user._id})
        .then(coacher => coacher ? res.json(coacher) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.create=(req,res)=>{
    const body=req.body
    body.coachImage=req.file.path
    const coacher=new Coacher(body)
    coacher.user=req.user._id
    coacher.save()
    .then(coacher=>{
        res.json(coacher) 
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const body=req.body
    const id=req.params.id
    Coacher.findOneAndUpdate({_id:id,user:req.user._id},body, {new : true, runValidators : true})
    .then(coacher=>{
        if(coacher){
            res.json(coacher)
        }
        else{
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Coacher.findOneAndDelete({_id:id,user:req.user._id})
    .then(coacher=>{
        if(coacher){
            res.json(coacher)
        }else{
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
}