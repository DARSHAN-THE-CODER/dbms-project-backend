// service
const getSubmissionsService = require('../../../services/submission/query/submisssions.get.service')

const getSubmissionsController = async (req, res) => {
    await getSubmissionsService(req, res);
}

module.exports = getSubmissionsController