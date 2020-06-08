const Batch=require('../models/batches')

module.exports.list=(req,res)=>{
    Batch.find()
    .then(batches=>{
        res.json(batches)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const batches=new Batch(body)
    batches.user=req.user._id
    batches.save()
    .then(batches=>{
        res.json(batches)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const body=req.body
    const id=req.params.id
    Batch.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidator:true})
    .then(batch=>{
        if(batch){
            res.json(batch)
        }else{
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Batch.findOneAndDelete({_id:id,user:req.user._id})
    .then(batch=>{
        if(batch){
            res.json(batch)
        }else{
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Batch.findOne({_id : id, user : req.user._id})
        .then(batch =>batch ? res.json(batch) : res.json({}))
        .catch(err => res.json(err))
}