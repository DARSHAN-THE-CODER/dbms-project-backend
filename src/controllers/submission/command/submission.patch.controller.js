// service
const updateSubmissionService = require('../../../services/submission/command/submission.patch.service')

const updateSubmissionController = async (req, res) => {
    await updateSubmissionService(req, res);
}   

module.exports = updateSubmissionController