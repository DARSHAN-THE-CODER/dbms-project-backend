// service
const createAssignmentService = require('../../../services/assignment/command/assignment.post.service')

const createAssignmentController = async (req, res) => {
    await createAssignmentService(req, res);
}

module.exports = createAssignmentController