const dbConnection = require('../../config/database')

const getStudentCount = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            let classCode = req.params.classCode;

            let count = await dbConnection.query(`SELECT getNumberOfStudents("${classCode}");`)
            console.log(" count ",count[0][0][`getNumberOfStudents("${classCode}")`])
            // count?.map((x) => {
            //     console.log(x[0])
            // })
            res.status(200).send({count:count[0][0][`getNumberOfStudents("${classCode}")`]})
        })
    } catch (error) {
        console.log(error)
        res.status(501).send()
    }
}

const getBackupAssignments = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const classCode = req.params.classCode;
            const facultyId = req.params.facultyId;
            console.log(classCode , facultyId)
            const details = await dbConnection.query(`SELECT * FROM assignment_backup where classCode = "${classCode}" and facultyId = "${facultyId}"`)

            console.log("details ", details)
            res.status(200).send(details[0])
        })
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
}

const getIntersectionStudents = async (req, res) => {
    try {
        const result = await dbConnection.transaction(async (t) => {
            const classCode1 = req.params.classCode1;
            const classCode2 = req.params.classCode2;

            const details = await dbConnection.query(`select srn from students where classCode = "${classCode1}" intersect select srn from students where classCode = "${classCode2}";`)
            
            console.log(details[0])
            res.status(200).send(details[0])
        })
    } catch (err) {
        console.log(err)
        res.status(500).send()
    }
}
module.exports = {getStudentCount, getBackupAssignments, getIntersectionStudents}