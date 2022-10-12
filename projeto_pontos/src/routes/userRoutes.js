const router = require('express').Router()
const userController = require('../controllers/userController')
const { userValidateNameAndDocument } = require('../middlewares/validators/user')
const { auth }  = require('../middlewares/auth')
const { role  } = require('../middlewares/verifyRole')
//auth, role,
router.get('/users',  userController.getAllController)
router.post('/user', auth, role, userValidateNameAndDocument, userController.createUserController)
router.get('/user/:id', auth, role, userController.getByIdController)
router.delete('/user/:document',auth, role, userController.deleteUserByDocumentController)
router.patch('/user/:id', auth, role,  userValidateNameAndDocument, userController.updateUserController)
router.post('/user/login', userController.loginController)

module.exports = router