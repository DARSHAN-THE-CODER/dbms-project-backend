// model
const submissionModel = require('../../../models/submissions.model')

const dbConnection = require('../../../config/database')

// this wil update submission details using submissionId

const updateSubmissionService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const srn = req.params.srn;
            const assignmentId = req.params.assignmentId;

            const submissionEntity = await submissionModel.update(
                {
                    ...req.body,
                },
                {
                    where: {
                        srn: srn,
                        assignmentId: assignmentId,
                    },
                    transaction: t,
                }
            )
            console.log("Updated successfully")
            res.status(200).send({ message: "Updated successfully" })
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Failed to update"})
    }
}

module.exports = updateSubmissionService