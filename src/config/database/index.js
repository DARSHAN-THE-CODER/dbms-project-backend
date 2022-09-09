const Sequelize = require('sequelize')
const config = require('..')

// Destructuring Database Configurations
const {
    DB_TYPE,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = config.DATABASE

// Create connection parameters for a new Sequelize instance
const connectionParams = {
    dialect: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    logging: 0,
    dialectOptions: {
        application_name: 'assignment',
        useUTC: false,
        timezone: '+05:30' // for reading the data
    },
}

const dbConnection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, connectionParams)

dbConnection
    .authenticate()
    .then(() => console.log('Connection has been established successfully with db.'))
    .catch((err) => console.log(`Unable to connect to the database: ${err}`, __filename))

module.exports = dbConnection