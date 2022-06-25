const express = require('express')
const controllers = require('../controllers/index')

const router = express.Router()

router.get('/',controllers.displayAllNotes)

router.post('/',controllers.addNewNotes)

router.delete('/:id',controllers.deleteSingleNote)

router.get('/:id',controllers.displaySingleNote)

router.patch('/:id',controllers.updateSingleNote)

module.exports = router