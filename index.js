const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
// const path = require('path')
const initServer = require('./src/utils')

const {uuid} = require('uuidv4')

// Initializing server
initServer()

// router
const mainRouter = require('./src/routes')

// ENV Configs
const PORT  = process.env.PORT

const port = PORT || 6060

const x = uuid();
console.log(x)
// APP
const app = express()
app.use(bodyParser.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(cors())


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to assignment management system' })
})

app.use('/', mainRouter)

const dbConnection = require('./src/config/database')

// dbConnection.query(`CREATE TRIGGER update_student_trigger` + 
// ` BEFORE UPDATE ON students` +
// ` FOR EACH ROW` +
// ` BEGIN` +
// ` IF NEW.srn != OLD.srn THEN` +
// ` SIGNAL SQLSTATE '45000'` +
// ` SET MESSAGE_TEXT = 'SRN cannot be updated';` +
// ` END IF;` +
// ` END;`, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

// create new table assignments_backup and create trigger to enter details into assignments_backup table on delete assignment from assignments table
dbConnection.query(`CREATE TABLE IF NOT EXISTS assignments_backup LIKE assignments`, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})

// dbConnection.query(`CREATE TRIGGER IF NOT EXISTS delete_assignment_trigger` +
// ` AFTER DELETE ON assignments` +
// ` FOR EACH ROW` +
// ` BEGIN` +
// ` INSERT INTO assignments_backup VALUES (OLD.assignmentId, OLD.assignmentNumber, OLD.title, OLD.description, OLD.type, OLD.resources, OLD.deadline, OLD.createdAt, OLD.updatedAt, OLD.classCode, OLD.facultyId);` +
// ` END;`, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

// write raw query in sequelize to create trigger for student table
// const query = `CREATE TRIGGER student_trigger
//     AFTER INSERT ON student
//     FOR EACH ROW
//     BEGIN
//         INSERT INTO student_audit (srn, name, classCode, createdAt, updatedAt)
//         VALUES (NEW.srn, NEW.name, NEW.classCode, NEW.createdAt, NEW.updatedAt);
//     END;`

// dbConnection
//     .query(query)
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

app.listen(port, () => {
    console.log(`Server listening at ${port}`)
})