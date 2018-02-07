let fs = require('fs')
let path = require('path')

/* ---
export all routes from each version-subfolder
this is overkill for a small project, but good practice nevertheless?
--- */
module.exports = function (app) {
  fs.readdirSync(__dirname).forEach(function (version) {
    let fullName = path.join(__dirname, version)
    let stat = fs.lstatSync(fullName)
    if (stat.isDirectory()) {
      fs.readdirSync(fullName).forEach(function (file) {
        if (file === 'index.js' || file.substr(file.lastIndexOf('.') + 1) !== 'js') {
          return
        }
        let name = file.substr(0, file.indexOf('.'))
        app.use(`/api/${version}/${name}`, require(`./${version}/${name}`))
      })
    }
  })
}
