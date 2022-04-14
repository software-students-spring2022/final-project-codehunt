// import and instantiate express
const express = require("express")
const app = express()
const path = require("path")

// import some useful middleware
const multer = require("multer")
const axios = require("axios")
require("dotenv").config({silent: true})
const morgan = require("morgan")
const fs = require("fs")

// additional middleware
const jwt = require("jsonwebtoken")
const passport = require("passport")
const cors = require("cors")
const users = require("../model/user.json") // mock user data
const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
const {jwtOptions, jwtStrategy} = require("./jwt-config.js")
const {fstat} = require("fs")

//Mongoose
require("./db.js")
const mongoose = require("mongoose")
const Users = mongoose.model('Users')

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))

app.use(passport.initialize())
app.use(cors())
passport.use(jwtStrategy)

app.get(
    "/protected",
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
      res.json({
        success: true,
        user: {
          id: req.user.id,
          username: req.user.username,
        },
        message: "Congratulations: you have accessed this route because you have a valid JWT token!",
      })
    },
)

app.post("/login", (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (!username || !password) {
    res
        .status(401)
        .json({success: false, message: "no username or password supplied."})
  }

  Users.find({username:req.body.username}, (err, result) => {
    if (err) {
      res
        .status(401)
        .json({success: false, message: `user not found: ${username}.`})
    }
    else if (result[password] === req.body.password) {
      // assuming we found the user, check the password is correct
      // we would normally encrypt the password the user submitted to check it against an encrypted copy of the user's password we keep in the database... but here we just compare two plain text versions for simplicity
      // the password the user entered matches the password in our "database" (mock data in this case)
      // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
      const payload = {id: result[username]} // encode data into the token
      const token = jwt.sign(payload, jwtOptions.secretOrKey) // create a signed token
      res.status(200).json({success: true, username: result[username], token: token}) // send the token to the client to store
    }
    else {
      res.status(401).json({success: false, message: "passwords did not match"})
    }
  })
})

app.get("/get/contests", (req, res) => {
  const data = fs.readFileSync(
      path.join(__dirname, "..", "model", "contests.json"),
      "utf8",
  )
  console.log(data)
  res.status(200).send(JSON.parse(data))
})

// get mock api data for home page
app.use("/featuredContests", (req, res, next) => {
  axios.get("https://my.api.mockaroo.com/contests.json?key=a36447e0")
      .then((apiResponse) => res.status(200).json(apiResponse.data))
      .catch((err) => next(err))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Could not get featured contests")
  next()
})

app.get("/featuredContests", (req, res) => {
  res.send(apiResponse)
})


const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app
