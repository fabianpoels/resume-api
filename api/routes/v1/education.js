let express = require('express')
let router = express.Router()
let controller = require('../../controllers/controller.js')
let dummyAuthorization = require('../../middleware/dummy.authorization.js')

router
  .get('/', dummyAuthorization.authorize, controller.education)

module.exports = router
