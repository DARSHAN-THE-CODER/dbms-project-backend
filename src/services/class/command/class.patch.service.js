const dbConnection = require('../../../config/database')

// model
const classModel = require('../../../models/class.model')

const updateClassService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            let classCode = req.params.classCode;
            const selectedFields = { ...req.body };
            let classEntity = await classModel.update(
                selectedFields,
                {
                    where: {
                        classCode: classCode,
                    },
                    transaction: t,
                }
            )
            console.log(classEntity);
            console.log("Successfully updated class details")
            res.status(200).send({message: "Successfully updated class details"})
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Failed to update class details"});
    }
}

module.exports = updateClassService