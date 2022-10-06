const router = require('express').Router()
const clientController = require('../controllers/clientController')

router.get('/clients', clientController.getAll)
router.post('/client', clientController.createClientController)
router.get('/client/:id', clientController.getById)

module.exports = router