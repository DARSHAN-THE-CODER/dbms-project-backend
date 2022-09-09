// service
const getSubmissionService = require('../../../services/submission/query/submission.get.service')

const getSubmissionController = async (req, res) => {
    await getSubmissionService(req, res);
}

module.exports = getSubmissionController