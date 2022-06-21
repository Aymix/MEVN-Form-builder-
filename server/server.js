const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./app/models')
const dbConfig = require('./app/config/db.config')
const indexRouter = require('./app/routes/index.js')
const authRouter = require('./app/routes/auth.js')
const userRouter = require('./app/routes/user')
const pagesRoute = require('./app/routes/pages')
const inputsRoute = require('./app/routes/inputs')
const formsRoute = require('./app/routes/forms')
const submissionsRoute = require('./app/routes/submissions')
require('dotenv').config()

app.use(cors())


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
    
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.')
  })
  .catch((err) => {
    console.error('Connection error', err)
    process.exit()
  })
//auth routes
app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/user', userRouter)
//pages routes
app.use('/pages', pagesRoute)
app.use('/inputs', inputsRoute)
//pages routes
app.use('/forms', formsRoute)
//pages routes
app.use('/submissions', submissionsRoute)


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
