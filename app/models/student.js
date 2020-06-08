const mongoose=require('mongoose')
const Schema=mongoose.Schema

const batchschema=new Schema({
    name:{
        type:String
    },
    mobileno:{
        type:String
    },
    dancetype:{
        type:Schema.Types.ObjectId,
        ref:'Dancetype'
    },
    coacher:{
        type:Schema.Types.ObjectId,
        ref:'Coacher'
    },
    // batch:{
    //     types:[Schema.Types.ObjectId],
    //     ref:'Batch'

    // },
    user:{
        type:mongoose.Schema.Types.ObjectId
    }
    
})

const Student=mongoose.model('Student',batchschema)
module.exports=Student