const dbConnection = require('../../../config/database')

// model
const facultyModel = require('../../../models/faculty.model')

const getFacultyService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            let email = req.params.email;
            let password = req.params.password;

            let facultyEntity = await facultyModel.findOne({
                where: {
                    email: email
                }
            }, {
                transaction: t,
            })

            if (facultyEntity == null)
                res.status(404).send({ message: "Email ID is invalid, Please sign-up first !" })
            if (password == facultyEntity?.dataValues?.password) {
                console.log("Sign in successfull")
                res.status(200).send(facultyEntity.dataValues)
            }
            else {
                console.log("Incorrect password")
                res.status(404).send({ message: "Please check your password !" })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(501).send()
    }
}

module.exports = getFacultyService