const dbConnection = require('../../../config/database')

// model
const facultyModel = require('../../../models/faculty.model')
const classModel = require('../../../models/class.model')
const studentModel = require('../../../models/student.model')

// This will get class details using class code including faculty and student details

const getClassService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            let classCode = req.params.classCode;
            // let classEntity = await classModel.findOne({
            //     where: {
            //         classCode: classCode
            //     },
            //     include:[{
            //         model: studentModel,
            //     }]
            // })

            let classEntity = await facultyModel.findOne({
                include: {
                    model: classModel,
                    where: {
                        classCode: classCode
                    },
                    include: {
                        model: studentModel
                    }
                }
            })
            console.log("successfully fetched class details")
            res.status(200).send(classEntity)
        })
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

module.exports = getClassService