// service
const createClassService = require('../../../services/class/command/class.post.service')

const createClassController = async (req, res) => {
    await createClassService(req, res);
}

module.exports = createClassController