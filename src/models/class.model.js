const { DataTypes } = require("sequelize")

const dbConnection = require("../config/database")
const modelConfiguration = require('../config/database/model.config')

// models
const facultyModel = require('../models/faculty.model')
const studentModel = require('./student.model')

const classModel = dbConnection.define(
    'Classes',
    {
        classCode: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        course: {
            type: DataTypes.STRING(512),
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING(512),
            allowNull: false,
        },
        className: {
            type: DataTypes.STRING(512),
            allowNull: false,
        },
        cr: {
            type: DataTypes.STRING(20),
            allowNull: true,
        }
    }
)

// facultyModel.hasOne(classModel,{
//     foreignKey: 'facultyId'
// })

classModel.hasMany(studentModel, {
    foreignKey: 'classCode',
})

module.exports = classModel