const dbConnection = require('../../../config/database')

// model
const studentModel = require('../../../models/student.model')
const classModel = require('../../../models/class.model')

// get student by srn : all classes to which he belongs to

const getStudentService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const srn = req.params.srn;

            let studentEntity = await classModel.findAll({
                include: {
                    model: studentModel,
                    where: {
                        srn: srn
                    }
                }
            })
            console.log(studentEntity);
            res.status(200).send(
                studentEntity ? studentEntity : null
            )
        })
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

module.exports = getStudentService