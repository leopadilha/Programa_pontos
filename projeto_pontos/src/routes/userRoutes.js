const router = require('express').Router()
const userController = require('../controllers/userController')
const { userValidateNameAndDocument } = require('../middlewares/validators/user')
const { auth }  = require('../middlewares/auth')
const { role  } = require('../middlewares/verifyRole')

router.get('/users', userController.getAllController)
router.post('/user', userValidateNameAndDocument, userController.createUserController)
router.get('/user/:id', auth, role, userController.getByIdController)
router.delete('/user/:document', userController.deleteUserByDocumentController)
router.patch('/user/:id',  userValidateNameAndDocument, userController.updateUserController)
router.post('/user/login', userController.loginController)

module.exports = router