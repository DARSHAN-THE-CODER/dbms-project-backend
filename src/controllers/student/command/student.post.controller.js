// service
const createStudentService = require('../../../services/student/command/student.post.service')

const createStudentController = async (req, res) => {
    await createStudentService(req, res);
}

module.exports = createStudentController