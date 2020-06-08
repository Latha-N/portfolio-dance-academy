const mongoose=require('mongoose')
const Schema=mongoose.Schema

const coacherSchema=new Schema({
    name:{
        type:String
    },
    mobile:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    coachImage:{
        type:String
    }
})

const Coacher=mongoose.model('Coacher',coacherSchema)
module.exports=Coacher

