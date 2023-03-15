const express = require('express')

const router = express.Router()

const placesController = require('../controllers/placesController')

router.get('/', placesController.index)

router.get('/', placesController.show)