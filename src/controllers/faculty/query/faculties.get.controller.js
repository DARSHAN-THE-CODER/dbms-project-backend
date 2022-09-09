// service
const getFacultiesService = require('../../../services/faculty/query/faculties.get.service')

const getFacultiesController = async (req, res) => {
    await getFacultiesService(req, res);
}

module.exports = getFacultiesController