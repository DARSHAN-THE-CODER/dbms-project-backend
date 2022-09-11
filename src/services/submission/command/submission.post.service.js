const { uuid } = require('uuidv4')
// model
const submissionModel = require('../../../models/submissions.model')
const studentModel = require('../../../models/student.model')
const classModel = require('../../../models/class.model')
const assignmentModel = require('../../../models/assignment.model')

const dbConnection = require('../../../config/database')

// this is used by student to submit assignment

const createSubmissionService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {

            const classEntity = await classModel.findOne({
                include: [{
                    model: assignmentModel,
                    where: {
                        assignmentId: req.body.assignmentId,
                    }
                },
                {
                    model: studentModel,
                    where: {
                        srn: req.body.srn
                    }
                }]
            })

            if (classEntity?.dataValues) {
                const submissionEntity = await submissionModel.create(
                    {
                        ...req.body,
                        submissionId: uuid()
                    },
                    {
                        transaction: t,
                    }
                )
                console.log("Assignment submitted succesfully !")
                res.status(201).send({ mesage: "Assignment submitted succesfully !" })
            }
            else {
                res.status(404).send({ message: "You do not belongs to this class !" })
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Assignment already submitted !" });
    }
}

module.exports = createSubmissionService