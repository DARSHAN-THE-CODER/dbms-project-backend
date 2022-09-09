// service
const deleteFacultyService = require('../../../services/faculty/command/faculty.delete.service')

const deleteFacultyController = async (req, res) => {
    await deleteFacultyService(req, res);
}

module.exports = deleteFacultyController