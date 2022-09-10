const dbConnection = require('../../../config/database')

// model
const studentModel = require('../../../models/student.model')
const classModel = require('../../../models/class.model')
// get all students belonging to particular class

const getStudentsService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const classCode = req.params.classCode;
            let studentsEntity = await classModel.findAll({
                where: {
                    classCode: classCode
                },
                include: {
                    model: studentModel
                }
            })
            console.log(studentsEntity);
            res.status(200).send(
                studentsEntity ? studentsEntity : null
            )
        })
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

module.exports = getStudentsService