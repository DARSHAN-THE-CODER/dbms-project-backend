// service
const getStudentService = require('../../../services/student/query/student.get.service')

const getStudentController = async (req, res) => {
    await getStudentService(req, res);
}

module.exports = getStudentController