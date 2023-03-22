const express = require('express')

const router = express.Router()

const logsController = require('../controllers/logsController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for logss, attach it to router along with the controller logic
router.get('/', logsController.index)

// Setup a "new" route for creating logs
router.get('/new', logsController.new)

// Setup a "clear" route for removing all data from logss collection
router.delete('/clear', logsController.clear)

// Setup a "delete" route for removing a specific logs
router.delete('/:id', logsController.delete)

// Setup a "update" route for updating a specific logs
router.put('/:id', logsController.update)

// Setup a "seed" route for repopulating our database
router.post('/seed', logsController.seed)

// Setup a "create" route for adding logs data
router.post('/', logsController.create)

// Setup a "edit" route for editing a logs
router.get('/:id/edit', logsController.edit)

// Setup an "show" route for logss, attach it to router along with the controller logic
router.get('/:id', logsController.show)


module.exports = router