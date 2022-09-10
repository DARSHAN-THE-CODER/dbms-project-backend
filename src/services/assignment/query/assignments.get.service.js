const dbConnection = require('../../../config/database')

// model
const assignmentModel = require('../../../models/assignment.model')
const classModel = require('../../../models/class.model')

// get assignments belonging to particular class

const getAllAssignmentsService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const classCode = req.params.classCode;
            const classEntity = await classModel.findAll ({
                where: {
                    classCode: classCode,
                },
                include: {
                    model: assignmentModel,
                }
            })
            console.log(classEntity);
            res.status(200).send(classEntity);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

module.exports = getAllAssignmentsService