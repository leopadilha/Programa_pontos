const router = require('express').Router()
const clientController = require('../controllers/clientController')
const {validateNameAndDocument, validateSpots} = require('../middlewares/validators/client')
const { auth } = require('../middlewares/auth')
const { role }  = require('../middlewares/verifyRole')

router.get('/client', clientController.getAllClientController)
router.post('/client', validateNameAndDocument, clientController.createClientController)
router.get('/client/:id', auth, clientController.getByIdClientController)
router.delete('/client/:document', clientController.deleteClientByDocumentController)
router.delete('/client/id/:id',  clientController.deleteClientByIdController)
router.patch('/client/:id',  validateNameAndDocument, clientController.updateClientController)
router.put('/client/spots/:id', validateSpots, clientController.updateSpotsController)

module.exports = router