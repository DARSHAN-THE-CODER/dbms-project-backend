const { uuid } = require('uuidv4')

const dbConnection = require('../../../config/database')

// model
const facultyModel = require('../../../models/faculty.model')

const createFacultyService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const facultyId = uuid();
            const { firstName, lastName, email, password, address, institution, contact } = req.body;

            const selectedFields = { facultyId, firstName, lastName, email, password, address, institution, contact }

            const facultyEntity = await facultyModel.create(
                selectedFields,
                {
                    transaction: t
                }
            )
            console.log(`Successfully created faculty ${facultyId}`);
            res.status(201).send({message: "SUCCESSFULLY CREATED "});
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "FAILED TO CREATE", error: error});
    }
}

module.exports = createFacultyService