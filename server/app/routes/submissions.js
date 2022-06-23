const express = require('express')
const router = express.Router()
const controller = require('../controllers/submissionsController')

router.get('/', controller.submissionsFilter)

router.post('/:id', controller.submissionSave)

router.get('/:id', controller.submissionGet)

router.delete('/:id', controller.submissionDelete)

//router.get('/filter', controller.submissionsFilter)


module.exports = router
