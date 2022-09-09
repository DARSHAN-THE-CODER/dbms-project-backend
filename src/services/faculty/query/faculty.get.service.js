const dbConnection = require('../../../config/database')

// model
const facultyModel = require('../../../models/faculty.model')

const getFacultyService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            let {email, password} = req.body;
            let facultyEntity = facultyModel.findOne({
                where: {
                    email: email
                }
            }, {
                transaction: t,
            })
            if(facultyEntity == null)
                res.status(404).send()
            if(password == facultyEntity?.dataValues?.password)
            {
                console.log("Sign in successfull")
                res.status(200).send(facultyEntity.dataValues)
            }
        })
    } catch (error) {
        console.log(error)
        res.status(501).send()
    }
} 

module.exports = getFacultyService