const dbConnection = require('../../../config/database')

// model
const classModel = require('../../../models/class.model')

var randomstring = require("randomstring");

const createClassService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const classCode = randomstring.generate(6);
            console.log(classCode)
            const {course, subject, className, facultyId, cr} = req.body;
            const selectedFields = {course, subject, className, facultyId, cr, classCode};
            const classEntity = await classModel.create(
                selectedFields,
                {
                    transaction: t
                }
            )
            console.log(`Successfully created class ${classCode}`);
            res.status(201).send({message:`Successfully created class ${classCode}`});
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Failed to create class"});
    }
}

module.exports = createClassService