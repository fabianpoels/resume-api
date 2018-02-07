/* ---
DEFAULT ERROR HANDLER
dummy error handler that can (read: MUST) be expanded for bigger API's
--- */

module.exports = function (app) {
  app.use(function (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(err.status).json(err)
  })
}
