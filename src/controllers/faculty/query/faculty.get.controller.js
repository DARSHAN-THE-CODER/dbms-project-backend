// service
const getFacultyService = require('../../../services/faculty/query/faculty.get.service')

const getFacultyController = async (req, res) => {
    await getFacultyService(req, res);
}

module.exports = getFacultyController