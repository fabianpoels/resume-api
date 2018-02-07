let express = require('express')
let router = express.Router()
let personalDataController = require('../../controllers/personal.controller.js')
let dummyAuthorization = require('../../middleware/dummy.authorization.js')

router
  .get('/', dummyAuthorization.authorize, personalDataController.personalData)

module.exports = router
