const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)

describe('All the routes', () => {
  describe('Client Routes', () => {
    it('should return the homepage with text', async () => {
      const response = await chai.request(server).get('/')

      response.should.have.status(200)
      response.should.be.html
      expect(true).to.equal(false)
    })

    it('should return a 404 for a route that does not exist', async () => {
      const response = await chai.request(server).get('/sad')
      response.should.have.status(404)
    })
  })

  describe('API Routes', () => {
    describe('GET /api/v1/papers', () => {
      it('should return all of the papers', async () => {
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
