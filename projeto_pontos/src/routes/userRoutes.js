const router = require('express').Router()
const userController = require('../controllers/userController')
//const userValidator = require('../middlewares/validators/client')

const auth  = require('../middlewares/auth')
const role  = require('../middlewares/verifyRole')

router.get('/users', auth.auth, role.role, userController.getAllController)
router.post('/user', userController.createUserController)
router.get('/user/:id', userController.getByIdController)
router.delete('/user/:document', userController.deleteUserByDocumentController)
router.patch('/user/:id', userController.updateUserController)

router.post('/user/login', userController.loginController)

module.exports = router