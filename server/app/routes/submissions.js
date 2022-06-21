const express = require('express')
const router = express.Router()
const controller = require('../controllers/submissionsController')

router.get('/', controller.submissions)

router.post('/', controller.submissionSave)

router.get('/:id', controller.submissionGet)

router.delete('/:id', controller.submissionDelete)



module.exports = router
