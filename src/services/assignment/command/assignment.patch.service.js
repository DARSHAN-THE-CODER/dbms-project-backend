const dbConnection = require('../../../config/database')

// model
const assignmentModel = require('../../../models/assignment.model')

const updateAssignmentService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const assignmentEntity = await assignmentModel.update(
                {
                    ...req.body
                },
                {
                    where: {
                        assignmentId: req.body.assignmentId
                    },
                    transaction: t,
                }
            )
            console.log(assignmentEntity);
            res.status(200).send({message: "Successfully updated"})
        })
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

module.exports = updateAssignmentService