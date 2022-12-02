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

// create trigger for faculty model, set age of faculty before insert 

// dbConnection.query(
//     `CREATE TRIGGER faculty_age_trigger_insert BEFORE INSERT ON faculties FOR EACH ROW
//     BEGIN
//         SET NEW.age = TIMESTAMPDIFF(YEAR, NEW.DOB, CURDATE());
//     END;`
// )


// dbConnection.query(
//     `CREATE TRIGGER faculty_age_trigger_update BEFORE UPDATE ON faculties FOR EACH ROW
//     BEGIN
//         SET NEW.age = TIMESTAMPDIFF(YEAR, NEW.DOB, CURDATE());
//     END;`
// )

// dbConnection.query(
//     `CREATE FUNCTION getNumberOfStudents(classCode varchar(40))
//     returns int
//     DETERMINISTIC
//     BEGIN
//         DECLARE numberOfStudents int default 10 ;
//         -- set numberOfStudents=100;
//         -- set num
//         -- return numberOfStudents;
//         set numberOfStudents = (SELECT COUNT(*) FROM students WHERE students.classCode = classCode);
//          -- select sum(marks) INTO numberOfStudents  from submissions where submissions.srn="PES1UG20CS536";
//          -- set numberOfStudents=100;
//         return numberOfStudents;
//     END`
// )

// dbConnection.query(`
// create procedure back_table (assignmentId varchar(40), assignmentNumber int, title varchar(512), description varchar(2048), type int, resource varchar(2048), classCode varchar(40), facultyId varchar(256))
// BEGIN
//         create table if not exists assignment_backup (assignmentId varchar(40), assignmentNumber int, title varchar(512), description varchar(2048), type int, resource varchar(2048), classCode varchar(40), facultyId varchar(256));
//         INSERT INTO assignment_backup values (assignmentId, assignmentNumber, title,  description, type, resource, classCode , facultyId );
// END
// `)
app.listen(port, () => {
    console.log(`Server listening at ${port}`)
})