let data = require('../data/./data')

module.exports = {
  personalData: function (req, res, next) {
    res.status(200).json(data.personal)
  },
  skills: function (req, res, next) {
    res.status(200).json(data.skills)
  },
  experience: function (req, res, next) {
    res.status(200).json(data.experience)
  }
}
