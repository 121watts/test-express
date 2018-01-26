const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Test Express'
app.locals.students = require('./students.js')

app.get('/', (request, response) => {
  response.send("We're going to test all the routes!")
})

app.get('/api/v1/students', (request, response) => {
  return response.status(200).json(app.locals.students)
})

module.exports = app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}.`)
})
