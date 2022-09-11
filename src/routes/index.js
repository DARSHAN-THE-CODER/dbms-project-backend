const express = require('express')

const router = express.Router()

// constants
const { ASSIGNMENTS, CLASS, FACULTY, STUDENT, SUBMISSION } = require('../constants/routes.constants')

// routers
const assignmentsRouter = require('./assignments.routes')
const classRouter = require('./class.routes')
const facultyRouter = require('./faculty.routes')
const studentRouter = require('./student.routes')
const submissionRouter = require('./submission.routes')

// routes

/* ASSIGNMENT ROUTES */
router.use(ASSIGNMENTS, assignmentsRouter)

// /* CLASS ROUTES */
router.use(CLASS, classRouter)

/* FACULTY ROUTES */
router.use(FACULTY, facultyRouter)

/* STUDENT ROUTES */
router.use(STUDENT, studentRouter)

// /* SUBMISSION ROUTES */
router.use(SUBMISSION, submissionRouter)

module.exports = router