// service
const deleteClassService = require('../../../services/class/command/class.delete.service')

const deleteClassController = async (req, res) => {
    await deleteClassService(req, res);
}

module.exports = deleteClassController