const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
  .then('./config/middlewares.js')
  .then('./api/helpers/validation.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.listen(7000, () => {
  console.log('yo! backend-api')
})
