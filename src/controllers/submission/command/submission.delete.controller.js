// service
const deletSubmissionService = require('../../../services/submission/command/submission.delete.service')

const deleteSubmissionController = async (req, res) => {
    await deletSubmissionService(req, res);
}   

module.exports = deleteSubmissionController