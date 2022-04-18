require("dotenv").config({silent: true})
const {jwtOptions, jwtStrategy} = require("./jwt-config.js")

// import and instantiate express
const express = require("express")
const app = express()

// import some useful middleware
const axios = require("axios")
const morgan = require("morgan")

// additional middleware
const jwt = require("jsonwebtoken")
const passport = require("passport")
const cors = require("cors")

// Mongoose
require("./db.js")
const mongoose = require("mongoose")
const User = mongoose.model("User")
const Contest = require("../model/Contest.js")

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))

app.use(passport.initialize())
app.use(cors())
passport.use(jwtStrategy)

const auth = passport.authenticate("jwt", {session: false})

app.get("/", (req, res) => {
  res.send("Hello")
})

app.get("/protected", auth, (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user.id,
      email: req.user.email,
    },
    message: "Congratulations: you have accessed this route because you have a valid JWT token!",
  })
})

app.post("/login", (req, res) => {
  console.log("testfdsafuhdsafa")

  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    res
        .status(401)
        .json({success: false, message: "no email or password supplied."})
  }

  User.findOne({email}, (err, user) => {
    if (!user) {
      res
          .status(401)
          .json({success: false, message: `user not found: ${email}.`})
    } else if (req.body.password === user.password) {
      // assuming we found the user, check the password is correct
      // we would normally encrypt the password the user submitted to check it against an encrypted copy of the user's password we keep in the database... but here we just compare two plain text versions for simplicity
      // the password the user entered matches the password in our "database" (mock data in this case)
      // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
      const payload = {id: user.id} // some data we'll encode into the token
      const token = jwt.sign(payload, jwtOptions.secretOrKey) // create a signed token
      res.status(200).json({success: true, email: user.email, token: token}) // send the token to the client to store
    } else {
      res.status(401).json({success: false, message: "passwords did not match"})
    }
  })
})

app.post("/signup", (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const confirmPassword = req.body.confirmPassword

  if (!email || !password || !confirmPassword) {
    res
        .status(401)
        .json({success: false, message: "No email or password supplied."})
  } else if (password !== confirmPassword) {
    res
        .status(401)
        .json({success: false, message: "Passwords do not match."})
  }

  User.findOne({email}, (err, oldUser) => {
    if (oldUser) {
      res
          .status(401)
          .json({success: false, message: "an account already exists for this email"})
    }
    User.create({email, password}, (err, user) => {
      res.status(200).json({success: true})
    })
  })
})

app.get("/get/contests", (req, res) => {
  Contest.find((err, data) => {
    const filteredData = data.filter((value) => {
      return Date.parse(value.timeStart) > Date.now()
    })
    res.status(200).send(JSON.parse(JSON.stringify(filteredData)))
  })
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