const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
// const path = require('path')
const initServer = require('./src/utils')

// router
const mainRouter = require('./src/routes')

// ENV Configs
const PORT  = process.env.PORT

const port = PORT || 6060

// APP
const app = express()
app.use(bodyParser.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(cors())

// Initializing server
initServer()

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to assignment management system' })
})

app.use('/', mainRouter)

app.listen(port, () => {
    console.log(`Server listening at ${port}`)
})