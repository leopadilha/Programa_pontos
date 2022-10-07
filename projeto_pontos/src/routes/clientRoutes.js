const router = require('express').Router()
const clientController = require('../controllers/clientController')
const clientValidator = require('../middlewares/validators/client')

router.get('/clients', clientController.getAll)
router.post('/client', clientValidator.validate, clientController.createClientController)
router.get('/client/:id', clientController.getById)
router.delete('/client/:document', clientController.deleteClientByDocumentController)

module.exports = router