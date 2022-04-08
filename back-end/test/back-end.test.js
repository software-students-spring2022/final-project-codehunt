const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../src/app')
const should = require('chai').should()
chai.use(chaiHttp);

describe("GET request to home", () => {
    it("the response should contain status code 200", done => {
        chai
            .request(server)
            .get("http://localhost:3001/featuredContests")
            .end((err,res) => {
                res.should.have.status(200)
                done()
            })
    })

    it("the response should contain json data", done => {
        chai
            .request(server)
            .get("/featuredContests")
            .end((err,res) => {
                assert.notEqual(res.json, undefined)
                done()
            })
    })
})

describe("GET request to protected", () => {
    it("should not have access to protected", done => {
        chai
            .request(server)
            .get("/protected")
            .end((err,res) => {
                res.should.have.status(401)
                done()
            })
    })
})



