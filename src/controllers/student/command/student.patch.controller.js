// service
const updateStudentService = require('../../../services/student/command/student.patch.service')

const updateStudentController = async (req, res) => {
    await updateStudentService(req, res);
}

module.exports = updateStudentController