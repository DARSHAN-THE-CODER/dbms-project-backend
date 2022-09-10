const dbConnection = require('../../../config/database')

// model
const assignmentModel = require('../../../models/assignment.model')
const submissionModel = require('../../../models/submissions.model')

// get assignment details using assignmentId

const getAssignmentService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const assignmentId = req.params.assignmentId;
            const assignmentEntity = await assignmentModel.findOne({
                where: {
                    assignmentId: assignmentId,
                },
                include: {
                    model: submissionModel,
                }
            })
            console.log(assignmentEntity);
            res.status(200).send(assignmentEntity);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Error fetching assignment details"})
    }
}

module.exports = getAssignmentService