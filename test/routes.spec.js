const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../server')
const pry = require('pryjs')

chai.use(chaiHttp)

describe('All the routes', () => {
  after(done => {
    server.close(done)
  })

  describe('Client Routes', () => {
    it('should return the homepage with text', async () => {
      const response = await chai.request(server).get('/')

      response.should.have.status(200)
      response.should.be.html
      response.res.text.should.equal("We're going to test all the routes!")
    })

    it('should return a 404 for a route that does not exist', async () => {
      const response = await chai.request(server).get('/sad')
      response.should.have.status(404)
    })
  })

  describe('API Routes', () => {
    describe('GET /api/v1/papers', () => {
      it('should return all of the students', async () => {
        try {
          const response = await chai.request(server).get('/api/v1/papers')
          response.should.have.status(200)
          response.should.be.json
          response.body.should.be.a('array')
          response.body.length
        } catch (error) {
          console.error(error)
          throw error
        }
      })
    })
  })
})
