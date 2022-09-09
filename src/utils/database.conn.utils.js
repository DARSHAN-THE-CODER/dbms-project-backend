
const dbConnection = require('../config/database')

// models
const facultyModel = require('../models/faculty.model')
const classModel = require('../models/class.model')
const studentModel = require('../models/student.model')
const assignmentModel = require('../models/assignment.model')
const submissionModel = require('../models/submissions.model') 

const syncSequelize = () => {
    dbConnection
        .sync()
        .then((result) => {
            console.log('Sequelize synced.')
        })
        .catch((err) => {
            console.log(err, __filename)
        })
}

module.exports = syncSequelize
