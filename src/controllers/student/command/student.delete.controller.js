// service
const deleteStudentService = require('../../../services/student/command/student.delete.service')

const deleteStudentController = async (req, res) => {
    await deleteStudentService(req, res);
}

module.exports = deleteStudentController