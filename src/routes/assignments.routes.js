const express = require('express')

const router = express.Router()

// constants
const { ASSIGNMENT_ID, CLASS, CLASS_CODE } = require('../constants/routes.constants')

// controllers
const createAssignmentController = require('../controllers/assignment/command/assignment.post.controller')
const patchAssignmentController = require('../controllers/assignment/command/assignment.patch.controller')
const deleteAssignmentController = require('../controllers/assignment/command/assignment.delete.controller')
const getAssignmentController = require('../controllers/assignment/query/assignment.get.controller')
const getAssignmentsController = require('../controllers/assignment/query/assignments.get.controller')

// routes

/* [POST] Create new assignment */
router.post('/', createAssignmentController)

/* [PATCH] Update assignment using assignmentId */
router.patch(ASSIGNMENT_ID, patchAssignmentController)

/* [DELETE] Delete assignment */
router.delete(ASSIGNMENT_ID, deleteAssignmentController)

/* [GET] Get assignments belonging to particular class  */
router.get(CLASS+CLASS_CODE, getAssignmentsController)

/* [GET] assignment details using assignmentId */
router.get(ASSIGNMENT_ID, getAssignmentController)

module.exports = router