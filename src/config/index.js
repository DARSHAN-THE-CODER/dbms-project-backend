const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    PORT: process.env.PORT ?? 6060,

    // Database Settings
    DATABASE: {
        DB_TYPE: process.env.DB_TYPE,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DB_NAME: process.env.DB_NAME,
    }
}