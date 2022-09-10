const express = require('express')

const router = express.Router()

// controllers
const updateClassController = require('../controllers/class/command/class.patch.controller')
const getClassController = require('../controllers/class/query/class.get.controller')
const getClassesController = require('../controllers/class/query/classes.get.controller')
const createClassController = require('../controllers/class/command/class.post.controller')

// constants
const { CLASS_CODE, FACULTY, FACULTY_ID } = require('../constants/routes.constants')

// routes

/* GET CLASSES BELONGING TO FACULTY */
router.get(FACULTY+FACULTY_ID, getClassesController)

/* GET CLASS */
router.get(CLASS_CODE, getClassController)

/* CREATE CLASS */
router.post('/', createClassController)

/* UPDATE CLASS */
router.patch(CLASS_CODE, updateClassController)

module.exports = router
