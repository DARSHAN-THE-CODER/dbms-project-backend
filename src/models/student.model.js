const { DataTypes } = require("sequelize")
const dbConnection = require('../config/database')

const modelConfiguration = require('../config/database/model.config')

// models
const classModel = require('./class.model')

const studentModel = dbConnection.define(
    'Students',
    {
        srn: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            // unique: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        cr: {
            type: DataTypes.STRING(20),
            defaultValue: null,
            allowNull: true,
        },
        isCr: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        classCode: {
            type: DataTypes.STRING(40),
            allowNull: false,
            // unique: true,
            primaryKey: true,
            references: {
                model: 'Classes',
                key: 'classCode',
            },
            onDelete: 'CASCADE'
        }
    },
    modelConfiguration
)

// studentModel.belongsTo(classModel,{
//     foreignKey: 'classCode'
// })
// classModel.hasMany(studentModel, {
//     foreignKey: 'classCode',
//     sourceKey: 'classCode'
// })

module.exports = studentModel