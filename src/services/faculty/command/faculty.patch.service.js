const dbConnection = require('../../../config/database')

// model
const facultyModel = require('../../../models/faculty.model')

const updateFacultyService = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const selectedFields = { ...req.body }
            console.log(selectedFields)
            const facultyEntity = await facultyModel.update(
                selectedFields,
                {
                    where: {
                        facultyId: req.body.facultyId,
                    },
                    transaction: t,
            })
            console.log("Successfully updated faculty")
            res.status(200).send();
        })
    } catch (error) {
        console.log(error);
        res.status(500).send()
    }
}

module.exports = updateFacultyService