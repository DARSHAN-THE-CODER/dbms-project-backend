// model
const studentModel = require('../../../models/student.model')

const dbConnection = require('../../../config/database')

// this will create new entry to students table

const createStudentService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const { srn, name, cr, classCode } = req.body;
            const selectedFields = { srn, name, cr, classCode }
            const studentEntity = await studentModel.create(
                selectedFields,
                {
                    transaction: t
                }
            )
            console.log(`Successfully created student ${srn}`);
            res.status(201).send();
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Student already present in this class !"});
    }
}

module.exports = createStudentService