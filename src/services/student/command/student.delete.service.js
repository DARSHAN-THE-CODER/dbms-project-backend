const dbConnection = require('../../../config/database')

// model
const studentModel = require('../../../models/student.model')

// delete assignment using assignmentId

const deleteStudentService = async (req, res) => {
    try {   
        const result = await dbConnection.transaction(async (t) => {
            const classCode = req.params.classCode;
            const srn = req.params.srn;

            const studentEntity = await studentModel.destroy({
                where: {
                    srn: srn,
                    classCode: classCode,
                },
                force: true,
            })
            console.log("deleted successfully");
            res.status(200).send({message: "Student deleted successfully"})
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Failed to delete student"});
    }
}

module.exports = deleteStudentService