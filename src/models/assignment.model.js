const { DataTypes } = require('sequelize')

const dbConnection = require('../config/database')
const modelConfiguration = require('../config/database/model.config')

//models
const classModel = require('./class.model')
const facultyModel = require('./faculty.model')

const assignmentModel = dbConnection.define(
    'Assignments',
    {
        assignmentId: {
            type: DataTypes.STRING(256),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        assignmentNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(512),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(2048),
            allowNull: true,
            defaultValue: null,
        },
        postedDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    modelConfiguration
)

classModel.hasMany(assignmentModel, {
    foreignKey: 'classCode'
})

facultyModel.hasMany(assignmentModel, {
    foreignKey: 'facultyId'
})

module.exports = assignmentModel