const express = require('express')
const router = express.Router()
const controller = require('../controllers/inputsController')

router.get('/', controller.inputs)

router.post('/', controller.inputSave)

router.get('/:id', controller.inputGet)

router.delete('/:id', controller.inputDelete)

router.patch('/:id', controller.inputUpdate)


module.exports = router
