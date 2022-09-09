// service
const getSubmissionsService = require('../../../services/submission/query/submissions.get.service')

const getSubmissionsController = async (req, res) => {
    await getSubmissionsService(req, res);
}

module.exports = getSubmissionsController