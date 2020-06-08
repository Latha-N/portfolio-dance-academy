// const Student=require('../models/student')

// module.exports.create=(req,res)=>{
//     const body=req.body
//     const student=new Student(body)
//     student.user=req.user._id
//     student.save()
//     .then(student=>{
//         res.json(student)
//     })
//     .catch(err=>{
//         res.json(err)
//     })
    
// }

// module.exports.list=(req,res)=>{
//     Student.find()
//     .then(student=>{
//         res.json(student)
//     })
//     .catch(err=>{
//         res.json(err)
//     })
// }

