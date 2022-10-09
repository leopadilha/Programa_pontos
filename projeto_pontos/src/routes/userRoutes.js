const router = require('express').Router()
const userController = require('../controllers/userController')
//const userValidator = require('../middlewares/validators/client')

router.get('/users', userController.getAllController)
router.post('/user', userController.createUserController)
router.get('/user/:id', userController.getByIdController)
router.delete('/user/:document', userController.deleteUserByDocumentController)
router.patch('/user/:id', userController.updateUserController)

module.exports = router