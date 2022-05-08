require("dotenv").config({silent: true})
const {jwtOptions, jwtStrategy} = require("./jwt-config.js")

// import and instantiate express
const express = require("express")
const app = express()

// import some useful middleware
const morgan = require("morgan")

// additional middleware
const jwt = require("jsonwebtoken")
const passport = require("passport")
const cors = require("cors")

// Mongoose
const mongoose = require("mongoose")
const Contest = require("../model/Contest.js")
const User = require("../model/User.js")
const { ConsoleMessage } = require("puppeteer")

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))

app.use(passport.initialize())
app.use(cors())
passport.use(jwtStrategy)

const auth = passport.authenticate("jwt", {session: false})

app.get("/", (req, res) => {
  res.send("This is the back-end api for the codehunt app")
})

app.get("/userSettings", auth, (req, res) => {
  User.findOne({_id: req.user.id}, (err, user) => {
    res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        subscription: user.subscriptions,
        password: user.password,
      },
    })
  })
})

app.post("/edit", (req, res) => {
  User.findOne({_id: req.body.id}).then( (x) =>{
    x["subscriptions"] = req.body.subscriptions
    x["password"] = req.body.password
    x.save()
  })
  const current = User.find({_id: req.body.id}).then(
      (data) => {
        console.log(data[0])
      },
  )
})

app.post("/editPass", (req, res) => {
  User.findOne({_id: req.body.id}).then( (x) =>{
    console.log(req.body.password)
    x["password"] = req.body.password
    x.save()
  })
})


app.post("/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    res
        .status(401)
        .json({success: false, message: "no email or password supplied."})
  } else {
    User.findOne({email}, (err, user) => {
      if (!user) {
        res
            .status(401)
            .json({success: false, message: `user not found: ${email}.`})
      } else if (req.body.password === user.password) {
        // TODO: password encryption
        // ALL USER SEARCHES AFTER LOGIN SHOULD BE DONE BY ID
        const payload = {id: user._id}
        const token = jwt.sign(payload, jwtOptions.secretOrKey)
        res.status(200).json({success: true, email: user.email, token: token})
      } else {
        res.status(401).json({success: false, message: "passwords did not match"})
      }
    })
  }
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
  } else {
    User.findOne({email}, (err, oldUser) => {
      if (oldUser) {
        res
            .status(401)
            .json({success: false, message: "an account already exists for this email"})
      } else {
        // TODO: password encryption
        User.create({email, password}, (err, user) => {
          res.status(200).json({success: true})
        })
      }
    })
  }
})

app.get("/get/contests", (req, res) => {
  User.findOne({_id: req.body.id}).then( (x) =>{
    console.log("Subscription is: " + req.body.subscriptions);
  })
  Contest.find((err, data) => {
    const filteredData = data.filter((value) => {
      return Date.parse(value.timeStart) > Date.now()
    })
    res.status(200).send(JSON.parse(JSON.stringify(filteredData)))
  })
})


app.get("/featuredContests", async (req, res) => {
  try{
    Contest.find((err, featuredContests) => {
      const filteredData = featuredContests.filter((value) => {
        return Date.parse(value.timeStart) > Date.now()
      })
      resData = filteredData.slice(0,3)
      res.status(200).json(JSON.parse(JSON.stringify(resData)))
    })
  } catch {
    res.json(err)
  }
})

const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {
  mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas"))
  console.log(`Server running on port ${PORT}`)
})

module.exports = app
