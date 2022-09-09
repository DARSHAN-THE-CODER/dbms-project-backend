// service
const getAssignmentsService = require('../../../services/assignment/query/assignments.get.service')

const getAssignmentsController = async (req, res) => {
    await getAssignmentsService(req, res);
}

module.exports = getAssignmentsController