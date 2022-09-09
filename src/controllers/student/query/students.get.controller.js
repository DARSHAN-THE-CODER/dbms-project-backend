// service
const getStudentsService = require('../../../services/student/query/students.get.service')

const getStudentsController = async (req, res) => {
    await getStudentsService(req, res);
}

module.exports = getStudentsController