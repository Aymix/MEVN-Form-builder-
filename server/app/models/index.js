const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose
db.user = require('./user.model')
db.page = require('./page.model')
db.form = require('./form.model')
db.submission = require('./submission.model')

module.exports = db
