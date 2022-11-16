const dbConnection = require('../../../config/database')

// model
const classModel = require('../../../models/class.model')

// delete assignment using assignmentId

const deleteClassService = async (req, res) => {
    try {   
        const result = await dbConnection.transaction(async (t) => {
            const classCode = req.params.classCode;

            const classEntity = await classModel.destroy({
                where: {
                    classCode: classCode,
                },
                force: true,
            })
            console.log("deleted successfully");
            res.status(200).send({message: "Class deleted successfully"})
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Failed to delete class"});
    }
}

module.exports = deleteClassService