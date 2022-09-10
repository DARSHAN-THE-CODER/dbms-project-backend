const dbConnection = require('../../../config/database')

// model
const assignmentModel = require('../../../models/assignment.model')

// delete assignment using assignmentId

const deleteAssignmentService = async (req, res) => {
    try {   
        const result = await dbConnection.transaction(async (t) => {
            const assignmentId = req.params.assignmentId;

            const assignmentEntity = await assignmentModel.destroy({
                where: {
                    assignmentId: assignmentId,
                },
                force: true,
            })
            console.log("deleted successfully");
            res.status(200).send({message: "Assignment deleted successfully"})
        })
    } catch (error) {
        console.log(error)
        res.status(500).send();
    }
}

module.exports = deleteAssignmentService