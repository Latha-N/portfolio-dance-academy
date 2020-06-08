const express=require('express')
const router=express.Router()
const multer=require('multer')

const usersController=require('../app/controller/usersController')
const authenticateUser=require('../app/middlewares/authentication')
const dancetypesController=require('../app/controller/dancetypes')
const coacherController=require('../app/controller/coacher')
const batchController=require('../app/controller/batchController')
// const studentController=require('../app/controller/studentController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  const upload = multer({ storage: storage })


//router.get('/users/info',usersController.list)
router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/account',authenticateUser,usersController.account)
router.delete('/users/logout',authenticateUser,usersController.logout)
// router.delete('/users/destroy/:id',usersController.destroy)
router.get('/users/admin', usersController.info)

router.post('/dancetypes/new',authenticateUser,upload.single('danceImage'),dancetypesController.create)
router.get('/dancetypes',authenticateUser,dancetypesController.list)
router.put('/dancetypes/edit/:id',authenticateUser,upload.single('danceImage'),dancetypesController.update)
router.delete('/dancetypes/:id',authenticateUser,dancetypesController.destroy)

router.get('/coachers',authenticateUser,coacherController.list)
router.post('/coachers/new',authenticateUser,upload.single('coachImage'),coacherController.create)
router.put('/coachers/edit/:id',authenticateUser,coacherController.update)
router.delete('/coachers/:id',authenticateUser,coacherController.destroy)
router.get('/coachers/:id',authenticateUser,coacherController.show)

router.get('/batches',authenticateUser,batchController.list)
router.post('/batches/new',authenticateUser,batchController.create)
router.put('/batches/edit/:id',authenticateUser,batchController.update)
router.delete('/batches/:id',authenticateUser,batchController.destroy)
router.get('/batches/show/:id',authenticateUser,batchController.show)


// router.get('/student',authenticateUser,studentController.list)
// router.post('/student/new',authenticateUser.studentController.create)
module.exports=router 