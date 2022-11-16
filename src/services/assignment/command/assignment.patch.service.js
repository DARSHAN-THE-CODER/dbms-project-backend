const dbConnection = require('../../../config/database')

// model
const assignmentModel = require('../../../models/assignment.model')

const updateAssignmentService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const assignmentEntity = await assignmentModel.update(
                {
                    ...req.body
                },
                {
                    where: {
                        assignmentId: req.params.assignmentId
                    },
                    transaction: t,
                }
            )
            console.log(assignmentEntity);
            res.status(200).send({ message: "Successfully updated" })
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Failed to update" });
    }
}

module.exports = updateAssignmentService

// create trigger for stdents model, which updates cr field of each person belonging to particular class when cr is changed

// code

// sql query 
// CREATE TRIGGER update_cr
// AFTER UPDATE ON classes
// FOR EACH ROW
// BEGIN
//     UPDATE students
//     SET cr = NEW.cr
//     WHERE classCode = NEW.classCode;
// END;