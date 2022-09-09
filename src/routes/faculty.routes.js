const express = require('express')

const router = express.Router()

// controllers
const deleteFacultyController = require('../controllers/faculty/command/faculty.delete.controller')
const updateFacultyController = require('../controllers/faculty/command/faculty.patch.controller')
const getFacultyController = require('../controllers/faculty/query/faculty.get.controller')
const getFacultiesController = require('../controllers/faculty/query/faculties.get.controller')
const createFacultyController = require('../controllers/faculty/command/faculty.post.controller')

// constants
const { FACULTY_ID } = require('../constants/routes.constants')

// routes

/* GET FACULTIES */
router.get('/', getFacultiesController)

/* GET FACULTY */
router.get(FACULTY_ID, getFacultyController)

/* CREATE FACULTY */
router.post('/', createFacultyController)

/* UPDATE FACULTY */
router.patch(FACULTY_ID, updateFacultyController)

/* DELETE FACULTY */
router.delete(FACULTY_ID, deleteFacultyController)

module.exports = router