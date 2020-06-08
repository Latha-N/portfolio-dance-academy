const mongoose=require('mongoose')
const CONNECTION = process.env.MONGODB_URI || 'mongodb://localhost:27017/oct-portfolio'
const setupDB=()=>{
    mongoose.connect(CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('connected to the database')
    })
    .catch(err=>console.log(err))
}

module.exports=setupDB