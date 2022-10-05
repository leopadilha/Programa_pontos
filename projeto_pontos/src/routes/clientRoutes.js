const router = require('express').Router()
const clientController = require('../controllers/clientController')

router.get('/client', clientController.getAll)
router.post('/client', clientController.createClient)
router.get('/client/:id', clientController.getById)

module.exports = router