const express = require('express')
const router = express.Router()
const controller = require('../controllers/pagesController')

router.get('/', controller.pages)

router.post('/:id', controller.pageSave)

router.get('/:id', controller.pageGet)

router.delete('/:id', controller.pageDelete)

router.patch('/:id', controller.pageUpdate)




module.exports = router
