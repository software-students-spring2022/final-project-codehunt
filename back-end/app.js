const express = require("express")
const morgan = require("morgan")
const axios = require("axios")
const jwt = require("jsonwebtoken")
const passport = require("passport")
const cors = require('cors')
const users = require("./user-data.js") // mock user data
const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
const {jwtOptions, jwtStrategy} = require("./jwt-config.js")
require("dotenv").config({silent: true})

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
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
  } else if (req.body.password == user.password) {
    const payload = {id: user.id}
    const token = jwt.sign(payload, jwtOptions.secretOrKey)
    res.json({success: true, username: user.username, token: token})
  } else {
    // the password did not match
    res.status(401).json({success: false, message: "passwords did not match"})
  }
})

module.exports = app
