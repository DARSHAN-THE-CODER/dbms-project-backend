// service
const deleteAssignmentService = require('../../../services/assignment/command/assignment.delete.service')

const deleteAssignmentController = async (req, res) => {
    await deleteAssignmentService(req, res);
}

module.exports = deleteAssignmentController