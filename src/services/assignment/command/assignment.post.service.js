const { uuid }= require('uuidv4')

const dbConnection = require('../../../config/database')

// model
const assignmentModel = require('../../../models/assignment.model')

const createAssignmentService = async(req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const {assignmentNumber, title, description, deadline, resources, type, classCode, facultyId} = req.body;
            const assignmentId = uuid();
            const selectedFields = {assignmentId, assignmentNumber, type, title,  resources, description, deadline, classCode, facultyId}
            const assignmentEntity = await assignmentModel.create(
                selectedFields,
                {
                    transaction: t
                }
            )
            console.log("successfully created assignment");
            res.status(201).send();
        })
    } catch (error) {
        console.log("failed to create assignment :",error);
        res.status(500).send();
    }
}

module.exports = createAssignmentService