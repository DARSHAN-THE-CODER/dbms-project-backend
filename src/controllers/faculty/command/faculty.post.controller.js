// service
const createFacultyService = require('../../../services/faculty/command/faculty.post.service')

const createFacultyController = async (req, res) => {
    await createFacultyService(req, res);
}

module.exports = createFacultyController