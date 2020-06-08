const mongoose=require('mongoose')
const Schema=mongoose.Schema

const batchschema=new Schema({
    batch:[
        {
            name:{
                type:String
            },
            timing:{
                type:String
            },
            startdate:{
                type:Date,
                default:Date.now()
            },
            enddate:{ 
                type:String
            },
            user:{
                type:mongoose.Schema.Types.ObjectId
            },
    }]
})

const Batch=mongoose.model('Batch',batchschema)
module.exports=Batch