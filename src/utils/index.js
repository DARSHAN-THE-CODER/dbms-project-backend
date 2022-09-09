
// Syncing Database
const syncSequelize = require('./database.conn.utils')

const initServer = () => {
    // sync Sequelize
    syncSequelize()

}

module.exports = initServer