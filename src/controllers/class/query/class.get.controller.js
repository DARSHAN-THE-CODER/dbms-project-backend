// service
const getClassService = require('../../../services/class/query/class.get.service')

const getClassController = async (req, res) => {
    await getClassService(req, res);
}

module.exports = getClassController