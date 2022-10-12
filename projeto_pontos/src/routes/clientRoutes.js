const router = require('express').Router()
const clientController = require('../controllers/clientController')
const {validateNameAndDocument, validateSpots} = require('../middlewares/validators/client')
const { auth } = require('../middlewares/auth')
const { role }  = require('../middlewares/verifyRole')

router.get('/client', auth, role, clientController.getAllClientController)
router.post('/client', auth, validateNameAndDocument, clientController.createClientController)
router.get('/client/:id', auth, clientController.getByIdClientController)
router.delete('/client/:document', auth, clientController.deleteClientByDocumentController)
router.patch('/client/:id', auth, validateNameAndDocument, clientController.updateClientController)
router.put('/client/spots/:id', auth, validateSpots, clientController.updateSpotsController)

module.exports = router