const { DataTypes } = require("sequelize")
const dbConnection = require('../config/database')

const modelConfiguration = require('../config/database/model.config')

const facultyModel = dbConnection.define('Faculties', {
    facultyId: {
        type: DataTypes.STRING(256),
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(320),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    address: {
        type: DataTypes.STRING(512),
        allowNull: true,
        defaultValue: null,
        validate: {
            len: [1, 512],
        },
    },
    institution: {
        type: DataTypes.STRING(512),
        allowNull: true,
        defaultValue: null,
        validate: {
            len: [3, 512],
        },
    },
    contact: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: null,
        validate: {
            len: [10, 15],
            is: /^[0-9]{10,15}$/,
        },
    },
    password: {
        type: DataTypes.STRING(50),
        defaultValue: null,
    }
}, modelConfiguration

)

module.exports = facultyModel