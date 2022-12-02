const express = require('express')

const router = express.Router()

const {getStudentCount, getBackupAssignments, getIntersectionStudents} = require('../controllers/misc/StudentCount')

router.get('/count/:classCode', getStudentCount)

router.get('/backup/:classCode/:facultyId', getBackupAssignments)

router.get('/intersect/:classCode1/:classCode2', getIntersectionStudents)

module.exports = router