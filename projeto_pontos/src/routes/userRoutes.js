const router = require('express').Router()
const userController = require('../controllers/userController')
//const userValidator = require('../middlewares/validators/client')

const { auth }  = require('../middlewares/auth')
const { role  } = require('../middlewares/verifyRole')

router.get('/users', auth, role, userController.getAllController)
router.post('/user', auth, role, userController.createUserController)
router.get('/user/:id', auth, role, userController.getByIdController)
router.delete('/user/:document',auth, role, userController.deleteUserByDocumentController)
router.patch('/user/:id', auth, role, userController.updateUserController)

router.post('/user/login', userController.loginController)

module.exports = router