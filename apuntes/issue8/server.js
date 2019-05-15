const express = require('express')
const bodyParser = require('body-parser')
const api = require('./controllers/api')
const {port} = require("./config")
const app = express()

// Middleware
app.use(bodyParser.json())
app.use(express.static('public'))

// Routes
app.get('/api/movies/:id', api.getItem)
app.route('/api/movies')
  .get(api.getAll)
  .post(api.create)
  .put(api.update)
  .delete(api.remove)

// Port
app.listen(port, () => {
  console.log('Ya estamos online!')
})
