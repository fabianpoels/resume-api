let express = require('express')
let app = express()
let dotenv = require('dotenv')
let bodyParser = require('body-parser')
let cors = require('cors')
let helmet = require('helmet')

/* --- load environment variables from .env --- */
dotenv.load()

/* --- use helmet for standard security --- */
app.use(helmet())

/* set the bodyParser to parse the urlencoded post data */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/* use CORS for all routes */
app.use(cors())

/* --- routing --- */
require('./api/routes/index.js')(app)

/* --- error handling --- */
require('./api/errors/index.js')(app)

app.listen(process.env.PORT, '0.0.0.0', function () {
  console.log('application is running and listening on port: ' + process.env.PORT)
})
