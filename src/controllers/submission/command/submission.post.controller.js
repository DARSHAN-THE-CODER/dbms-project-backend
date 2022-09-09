// service
const createSubmissionService = require('../../../services/submission/command/submission.post.service')

const createSubmissionController = async (req, res) => {
    await createSubmissionService(req, res);
}

module.exports = createSubmissionController