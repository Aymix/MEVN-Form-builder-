const express = require('express')
const router = express.Router()
const controller = require('../controllers/formsController')

router.get('/', controller.forms)

router.post('/', controller.formSave)

router.get('/:id', controller.formGet)

router.delete('/:id', controller.formDelete)

router.patch('/:id', controller.formUpdate)

module.exports = router
