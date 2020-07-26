const DanceType=require('../models/dancetypes')


module.exports.list=(req,res)=>{
    //const id=req.user._id
// console.log('listing dance',req.user._id)
    DanceType.find()
    .then(dancetypes=>{
        res.json(dancetypes)
    })
    .catch(err=>{
        res.json(err)
    })
}

// module.exports.create=(req,res)=>{
//     const body=req.body
//     // console.log(req.file)
//     // if(req.file) {
//     //     const file = req.file
//     //     body.danceImage = `${file.destination}/${file.filename}`
//     // }
//     body.danceImage=req.file.path
//     const dancetype=new DanceType(body)
//     dancetype.user=req.user._id
//     dancetype.save()
//     .then(dancetype=>{
//         res.json(dancetype)
//     })
//     .catch(err=>{
//         res.json(err)
//     })
// }

module.exports.create=(req,res)=>{
    const body=req.body
    body.danceImage=req.file.path
    const dancetype=new DanceType(body)
    dancetype.user=req.user._id
    dancetype.save()
    .then(dancetype=>{
        res.json(dancetype)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    DanceType.findOne({_id:id,user:req.user._id})
    .then(dancetype=>{
        if(dancetype){
            res.json(dancetype)
        }else{
            res.json({})
        }
    })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    if(req.file) {
        body.danceImage = req.file.path
    }else{
        DanceType.findOne({_id:id,user:req.user._id})
        .then(dancetype=>{
            if(dancetype.danceImage){
                body.danceImage = dancetype.danceImage
            }
        })
    }

    DanceType.findOneAndUpdate({_id : id, user : req.user._id}, body, {new : true, runValidators : true})
        .then(dancetype=>{
            if(dancetype){
                res.json(dancetype)
            }else{
                res.json({})
            }
        })
} 

module.exports.destroy = (req, res) => {
    const id = req.params.id
    DanceType.findOneAndDelete({_id : id, user : req.user._id})
        .then(dancetype => dancetype ? res.json(dancetype) : res.json({}))
        .catch(err => res.json(err))
}