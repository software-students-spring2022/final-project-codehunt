const app = require('../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
ç
describe("GET request to home", () => {
  it("the response should contain status code 200", (done) => {
    chai
        .request(app)
        .get("/featuredContests")
        .then(res => {
            chai.expect(res.status).to.equal(200)
            done()
        })
        .catch(err => console.error(err))
  })

  it("the response should contain json data", (done) => {
    chai
        .request(app)
        .get("/featuredContests")
        .then(res => {
            chai.expect(res.body).to.be.an('array')
            done()
        })
        .catch(err => console.error(err))
  })
})

describe("GET request to protected", () => {
  it("should not have access to protected", (done) => {
    chai
        .request(app)
        .get("/protected")
        .then(res => {
            chai.expect(res.status).to.equal(401)
            done()
        })
        .catch(err => console.error(err))
  })
})

describe("Testing login", () => {
  it("should return 401 for not providing username or password", (done) => {
    chai
        .request(app)
        .post("/login")
        .send()
        .then(res => {
            chai.expect(res.status).to.equal(401)
            chai.expect(res.body).to.be.an('json')
            chai.expect(res.body).to.equal({success: false, message: "no email or password supplied."})
        })
        .catch(err => console.error(err))
  })
  it("should return 401 for providing wrong username", (done) => {
    chai
        .request(app)
        .post("/login")
        .send({
            email: 'wrong@wrong.com',
            password: 'wrong'
        })
        .then(res => {
            chai.expect(res.status).to.equal(401)
            chai.expect(res.body).to.be.an('json')
            chai.expect(res.body).to.equal({success: false, message: `user not found: wrong@wrong.com.`})
            done()
        })
        .catch(err => console.error(err))
  })
  it("should return 401 for providing wrong password", (done) => {
    chai
        .request(app)
        .post("/login")
        .send({
            email: 'codehunt@gmail.com',
            password: 'wrong'
        })
        .then(res => {
            chai.expect(res.status).to.equal(401)
            chai.expect(res.body).to.be.an('json')
            chai.expect(res.body).to.equal({success: false, message: "passwords did not match"})
            done()
        })
        .catch(err => console.error(err))
  })
  it("should return 200 for providing correct username and password", (done) => {
    chai
        .request(app)
        .post("/login")
        .send({
            email: 'codehunt@gmail.com',
            password: 'abc'
        })
        .then(res => {
            chai.expect(res.status).to.equal(200)
            chai.expect(res.body).to.be.an('json')
            done()
        })
        .catch(err => console.error(err))
  })
})

describe("GET request to contests", () => {
    it("the response should contain status code 200", (done) => {
        chai
            .request(app)
            .get("/get/contests")
            .then(res => {
                chai.expect(res.status).to.equal(200)
                chai.expect(res.body).to.be.an('array')
                done()
            })
            .catch(err => console.error(err))
    })
})

describe("Testing signup", () => {
    it("request does not include email, password, or confirmPassword", () => {
        chai
            .request(app)
            .post("/signup")
            .send()
            .then(res => {
                chai.expect(res.status).to.equal(401)
                chai.expect(res.body).to.be.an('json')
                chai.expect(res.body).to.equal({success: false, message: "No email or password supplied."})
            })
            .catch(err => console.error(err))
    })
    it("password does not equal to confirmPassword", () => {
        chai
            .request(app)
            .post("/signup")
            .send({
                email: 'test@test.com',
                password: 'wrong1',
                confirmPassword: 'wrong2'
            })
            .then(res => {
                chai.expect(res.status).to.equal(401)
                chai.expect(res.body).to.be.an('json')
                chai.expect(res.body).to.equal({success: false, message: "Passwords do not match."})
            })
            .catch(err => console.error(err))
    })
    it("user already exist", () => {
        chai
            .request(app)
            .post("/signup")
            .send({
                email: 'codehunt@gmail.com',
                password: 'test',
                confirmPassword: 'test'
            })
            .then(res => {
                chai.expect(res.status).to.equal(401)
                chai.expect(res.body).to.be.an('json')
                chai.expect(res.body).to.equal({success: false, message: "an account already exists for this email"})
            })
            .catch(err => console.error(err))
    })
    it("create new user", () => {
        chai
            .request(app)
            .post("/signup")
            .send({
                email: 'test@test.com',
                password: 'test',
                confirmPassword: 'test'
            })
            .then(res => {
                chai.expect(res.status).to.equal(200)
                chai.expect(res.body).to.be.an('json')
                chai.expect(res.body).to.equal({success: true})
            })
            .catch(err => console.error(err))
    })
})
