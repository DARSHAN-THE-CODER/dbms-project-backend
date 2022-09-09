// service
const getAssignmentService = require('../../../services/assignment/query/assignment.get.service')

const getAssignmentController = async (req, res) => {
    await getAssignmentService(req, res);
}

module.exports = getAssignmentController