const express=require('express')
const setupDB=require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
//const bodyParser=require('body-parser')


const app=express()

setupDB()
app.use(cors())

const port= process.env.PORT || 3099
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser());
app.use(express.json())
app.use( '/uploads',  express.static('uploads'))
app.use('/', router)

app.listen(port,() => {
    console.log('litening on port', port)
})
