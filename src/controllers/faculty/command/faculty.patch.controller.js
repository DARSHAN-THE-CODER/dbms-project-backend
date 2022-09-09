// service
const updateFacultyService = require('../../../services/faculty/command/faculty.patch.service')

const updateFacultyController = async (req, res) => {
    await updateFacultyService(req, res);
}

module.exports = updateFacultyController