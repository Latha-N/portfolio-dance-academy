const mongoose=require('mongoose')
const Schema=mongoose.Schema

const dancetypesschema=new Schema({
    dancestyle:{
        type:String
    },
    description:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    danceImage:{
        type:String
    }
})

const DanceType=mongoose.model('DanceType',dancetypesschema)
module.exports=DanceType