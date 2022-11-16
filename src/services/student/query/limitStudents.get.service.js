const dbConnection = require('../../../config/database')

// model
const studentModel = require('../../../models/student.model')
const classModel = require('../../../models/class.model')

// get all students belonging to particular class but with limit and offset

// // Fetch 10 instances/rows
// Project.findAll({ limit: 10 });

// // Skip 8 instances/rows
// Project.findAll({ offset: 8 });

// // Skip 5 instances and fetch the 5 after that
// Project.findAll({ offset: 5, limit: 5 });

// get only 10 students limit 10 offset 0

// skip 5 and get 2 students limit 2 offset 5

const getLimitedStudentsService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const classCode = req.params.classCode;
            // const limit = req.params.limit;
            // const offset = req.params.offset || 0;

            // console.log(limit , offset)
            let studentsEntity = await classModel.findAll({
                where: {
                    classCode: classCode
                },
                include: {
                    limit: parseInt(req.params.limit),
                    offset: parseInt(req.params.offset),
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

module.exports = getLimitedStudentsService