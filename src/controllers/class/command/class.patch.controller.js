// service
const updateClassService = require('../../../services/class/command/class.patch.service')

const updateClassController = async (req, res) => {
    await updateClassService(req, res);
}

module.exports = updateClassController