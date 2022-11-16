const dbConnection = require('../../../config/database')

// model
const facultyModel = require('../../../models/faculty.model')
const classModel = require('../../../models/class.model')
const studentModel = require('../../../models/student.model')

// get all classes belonging to particular faculty

const getAllClasses = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            let facultyId = req.params.facultyId;
            let classesEntity = await facultyModel.findAll({
                where: {
                    facultyId: facultyId,
                },
                include: {
                    model: classModel,
                    include: {
                        model: studentModel
                    }
                }
            })
            console.log(classesEntity)
            res.status(200).send( { data :  classesEntity ? classesEntity : null })
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Couldn't fetch classes"})
    }
}

module.exports = getAllClasses