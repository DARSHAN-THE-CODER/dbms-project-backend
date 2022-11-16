const dbConnection = require('../../../config/database')

// model
const submissionModel = require('../../../models/submissions.model')

// delete assignment using assignmentId

const deleteSubmissionService = async (req, res) => {
    try {   
        const result = await dbConnection.transaction(async (t) => {
            const assignmentId = req.params.assignmentId;
            const srn = req.params.srn;

            const submissionEntity = await submissionModel.destroy({
                where: {
                    assignmentId: assignmentId,
                    srn: srn,
                },
                force: true,
            })
            console.log("deleted successfully");
            res.status(200).send({message: "Submission deleted successfully"})
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Failed to delete submission"});
    }
}

module.exports = deleteSubmissionService