// service
const updateAssignmentService = require('../../../services/assignment/command/assignment.patch.service')

const updateAssignmentController = async (req, res) => {
    await updateAssignmentService(req, res);
}

module.exports = updateAssignmentController