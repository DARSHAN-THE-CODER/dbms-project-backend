const express = require('express')

const router = express.Router()

// constants
const {SUBMISSION, SUBMISSION_ID, SRN, ASSIGNMENT_ID} = require('../constants/routes.constants')

// controllers
const createSubmissionController = require('../controllers/submission/command/submission.post.controller')
const updateSubmissionController = require('../controllers/submission/command/submission.patch.controller')
const getSubmissionController = require('../controllers/submission/query/submission.get.controller')
const getSubmissionsController = require('../controllers/submission/query/submisssions.get.controller')
const deleteSubmissionController = require('../controllers/submission/command/submission.delete.controller')

// routes

/* [POST] Create new submission */
router.post('/', createSubmissionController)

/* [PATCH] Update submission */
router.patch(ASSIGNMENT_ID+SRN, updateSubmissionController)

/* [GET] Get submission details */
// router.get()

/* [DELETE] Delete submission*/
router.delete(ASSIGNMENT_ID+SRN, deleteSubmissionController)

module.exports = router