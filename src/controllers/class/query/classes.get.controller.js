// service
const getClassesService = require('../../../services/class/query/classes.get.service')

const getClassesController = async (req, res) => {
    await getClassesService(req, res);
}

module.exports = getClassesController