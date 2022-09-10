const express = require('express')

const router = express.Router()

// controllers
const deleteStudentController = require('../controllers/student/command/student.delete.controller')
const updateStudentController = require('../controllers/student/command/student.patch.controller')
const getStudentController = require('../controllers/student/query/student.get.controller')
const getStudentsController = require('../controllers/student/query/students.get.controller')
const createStudentController = require('../controllers/student/command/student.post.controller')

// constants
const { SRN, CLASS, CLASS_CODE } = require('../constants/routes.constants')

// routes

/* GET STUDENTS BELONGING TO PARTICULAR CLASS*/
router.get(CLASS+CLASS_CODE, getStudentsController)

/* GET STUDENT */
router.get(SRN, getStudentController)

/* CREATE STUDENT */
router.post('/', createStudentController)

/* UPDATE STUDENT */
router.patch(SRN, updateStudentController)

/* DELETE STUDENT */
router.delete(SRN, deleteStudentController)

module.exports = router