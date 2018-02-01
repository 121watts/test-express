const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Test Express'

app.get('/', (request, response) => {
  response.send('We ARE continuous integrators!')
})

app.get('/api/v1/papers', (request, response) => {
  database('papers')
    .select()
    .then(papers => {
      response.status(200).json(papers)
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

module.exports = app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}.`)
})
