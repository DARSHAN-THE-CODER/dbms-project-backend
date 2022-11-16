const dbConnection = require('../../../config/database')

// model
const studentModel = require('../../../models/student.model')

const updateStudentService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            let srn = req.params.srn;
            let classCode = req.params.classCode;
            const selectedFields = { ...req.body };
            let studentEntity = await studentModel.update(
                selectedFields,
                {
                    where: {
                        srn: srn,
                        classCode: req.params.classCode
                    },
                    transaction: t,
                }
            )
            console.log(studentEntity);
            console.log("Successfully updated student details")
            res.status(200).send({message: "Successfully updated student details"})
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Failed to update student details"});
    }
}

module.exports = updateStudentService