const express = require("express")
const morgan = require("morgan")
const axios = require("axios")
const jwt = require("jsonwebtoken")
const passport = require("passport")
// load up some mock user data in an array... this would normally come from a database
const users = require("./user-data.js")
// use this JWT strategy within passport for authentication handling
const { jwtOptions, jwtStrategy } = require("./jwt-config.js") // import setup options for using JWT in passport

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
passport.use(jwtStrategy)

app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // our jwt passport config will send error responses to unauthenticated users will
    // so we only need to worry about sending data to properly authenticated users!

    res.json({
      success: true,
      user: {
        id: req.user.id,
        username: req.user.username,
      },
      message:
        "Congratulations: you have accessed this route because you have a valid JWT token!",
    })
  }
)

// a route to handle a login attempt
app.post("/login", (req, res) => {
  // brab the name and password that were submitted as POST body data
  const username = req.body.username
  const password = req.body.password
  // console.log(`${username}, ${password}`)
  if (!username || !password) {
    // no username or password received in the POST body... send an error
    res
      .status(401)
      .json({ success: false, message: "no username or password supplied." })
  }

  // usually this would be a database call, but here we look for a matching user in our mock data
  const user = users[_.findIndex(users, { username: username })]
  if (!user) {
    // no user found with this name... send an error
    res
      .status(401)
      .json({ success: false, message: `user not found: ${username}.` })
  }

  // assuming we found the user, check the password is correct
  // we would normally encrypt the password the user submitted to check it against an encrypted copy of the user's password we keep in the database... but here we just compare two plain text versions for simplicity
  else if (req.body.password === user.password) {
    // the password the user entered matches the password in our "database" (mock data in this case)
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    const payload = { id: user.id } // some data we'll encode into the token
    const token = jwt.sign(payload, jwtOptions.secretOrKey) // create a signed token
    res.json({ success: true, username: user.username, token: token }) // send the token to the client to store
  } else {
    // the password did not match
    res.status(401).json({ success: false, message: "passwords did not match" })
  }
})

module.exports = app
