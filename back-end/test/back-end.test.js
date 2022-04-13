const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../src/app")
const should = require("chai").should()
chai.use(chaiHttp)

describe("GET request to home", () => {
  it("the response should contain status code 200", (done) => {
    chai
        .request(server)
        .get("/featuredContests")
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
  })

  it("the response should contain json data", (done) => {
    chai
        .request(server)
        .get("/featuredContests")
        .end((err, res) => {
          assert.notEqual(res.json, undefined)
          done()
        })
  })
})

describe("GET request to protected", () => {
  it("should not have access to protected", (done) => {
    chai
        .request(server)
        .get("/protected")
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })
  })
})

describe("Testing login", () => {
  it("should return 401 for not providing username or password", (done) => {
    chai
        .request(server)
        .post("/login")
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })
  })
  it("should return 401 for providing wrong username", (done) => {
    chai
        .request(server)
        .post("/login?username=fake&password=bar")
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })
  })
  it("should return 401 for providing wrong username", (done) => {
    chai
        .request(server)
        .post("/login?username=fake&password=bar")
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })
  })
  it("should return 401 for providing wrong password", (done) => {
    chai
        .request(server)
        .post("/login?username=foo@gmail.com&password=fake")
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })
  })
  it("should return 200 for providing correct username and password", (done) => {
    chai
        .request(server)
        .post("/login?username=foo@gmail.com&password=bar")
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
  })
  it("should return 200 for providing correct username and password", (done) => {
    chai
        .request(server)
        .post("/login?username=foo@gmail.com&password=bar")
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
  })
})


