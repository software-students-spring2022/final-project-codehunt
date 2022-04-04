// import and instantiate express
const express = require("express")
const app = express()
const path = require("path")

// import some useful middleware
const multer = require("multer")
const axios = require("axios")
require("dotenv").config({ silent: true })
const morgan = require("morgan")

// additional middleware
const jwt = require("jsonwebtoken")
const passport = require("passport")
const cors = require('cors')
const users = require("./user-data.js") // mock user data
const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
const {jwtOptions, jwtStrategy} = require("./jwt-config.js")

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
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
  // console.log(`${username}, ${password}`)

  if (!username || !password) {
    res
      .status(401)
      .json({success: false, message: "no username or password supplied."})
  }

  const user = users[_.findIndex(users, {username: username})]
  if (!user) {
    res
      .status(401)
      .json({success: false, message: `user not found: ${username}.`})
  } else if (req.body.password === user.password) {
    // assuming we found the user, check the password is correct
    // we would normally encrypt the password the user submitted to check it against an encrypted copy of the user's password we keep in the database... but here we just compare two plain text versions for simplicity
    // the password the user entered matches the password in our "database" (mock data in this case)
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    const payload = { id: user.id } // some data we'll encode into the token
    const token = jwt.sign(payload, jwtOptions.secretOrKey) // create a signed token
    res.json({ success: true, username: user.username, token: token }) // send the token to the client to store
  } else {
    // the password did not match
    res.status(401).json({success: false, message: "passwords did not match"})
  }
})

module.exports = app
