const express = require('express')

const router = express.Router()

// controllers
const deleteStudentController = require('../controllers/student/command/student.delete.controller')
const updateStudentController = require('../controllers/student/command/student.patch.controller')
const getStudentController = require('../controllers/student/query/student.get.controller')
const getStudentsController = require('../controllers/student/query/students.get.controller')
const createStudentController = require('../controllers/student/command/student.post.controller')

const getLimitedStudentController = require('../controllers/student/query/limitStudents.get.controller')

// constants
const { SRN, CLASS, CLASS_CODE } = require('../constants/routes.constants')

// routes

/* GET STUDENTS BELONGING TO PARTICULAR CLASS*/
router.get(CLASS+CLASS_CODE, getStudentsController)

/* GET LIMITED STUDENTS BELONGING TO PARTICULAR CLASS*/
router.get(CLASS+'/limit'+CLASS_CODE+'/:limit'+'/:offset', getLimitedStudentController)

/* GET STUDENT */
router.get(SRN, getStudentController)

/* CREATE STUDENT */
router.post('/', createStudentController)

/* UPDATE STUDENT */
router.patch(SRN+CLASS_CODE, updateStudentController)

/* DELETE STUDENT */
router.delete(SRN+CLASS_CODE, deleteStudentController)

module.exports = router