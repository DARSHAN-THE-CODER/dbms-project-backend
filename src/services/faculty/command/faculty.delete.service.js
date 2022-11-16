const dbConnection = require('../../../config/database')

// model
const facultyModel = require('../../../models/faculty.model')

// delete assignment using assignmentId

const deleteFacultyService = async (req, res) => {
    try {   
        const result = await dbConnection.transaction(async (t) => {
            const facultyId = req.params.facultyId;

            const classEntity = await facultyModel.destroy({
                where: {
                    facultyId: facultyId,
                },
                force: true,
            })
            console.log("deleted successfully");
            res.status(200).send({message: "Faculty deleted successfully"})
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Failed to delete faculty"});
    }
}

module.exports = deleteFacultyService