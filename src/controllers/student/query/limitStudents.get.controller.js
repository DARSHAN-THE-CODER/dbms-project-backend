const getLimitedStudentService = require('../../../services/student/query/limitStudents.get.service')

const getLimitedStudentController = async (req, res) => {
    await getLimitedStudentService(req, res);
}

module.exports = getLimitedStudentController