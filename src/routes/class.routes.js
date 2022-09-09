const express = require('express')

const router = express.Router()

// controllers
const updateClassController = require('../controllers/class/command/class.patch.controller')
const getClassController = require('../controllers/class/query/class.get.controller')
const getClassesController = require('../controllers/class/query/classes.get.controller')
const createClassController = require('../controllers/class/command/class.post.controller')

// constants
const { CLASS_CODE } = require('../constants/routes.constants')

// routes

/* GET CLASSES */
router.get('/', getClassesController)

// /* GET CLASS */
router.get(CLASS_CODE, getClassController)

// /* CREATE CLASS */
router.post('/', createClassController)

// /* UPDATE CLASS */
router.patch(CLASS_CODE, updateClassController)

module.exports = router
