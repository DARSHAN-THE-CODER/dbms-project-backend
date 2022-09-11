const { DataTypes } = require("sequelize")
const dbConnection = require('../config/database')

const modelConfiguration = require('../config/database/model.config')

// models
const classModel = require('./class.model')
const facultyModel = require('./faculty.model')
const assignmentModel = require('./assignment.model')
const studentModel = require('./student.model')

const submissionModel = dbConnection.define(
    'Submissions',
    {
        // submissionId: {
        //     type: DataTypes.STRING(256),
        //     primaryKey: true,
        //     allowNull: false,
        //     unique: true,
        // },
        response: {
            type: DataTypes.STRING(2048),
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        marks: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        srn: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            references: {
                model: 'Students',
                key: 'srn',
            }
        },
        assignmentId: {
            type: DataTypes.STRING(256),
            primaryKey: true,
            references: {
                model: 'Assignments',
                key: 'assignmentId',
            },
        }
    },
    modelConfiguration
)

assignmentModel.hasMany(submissionModel,{
    foreignKey: 'assignmentId'
})

studentModel.hasMany(submissionModel, {
    foreignKey: 'srn'
})

module.exports = submissionModel