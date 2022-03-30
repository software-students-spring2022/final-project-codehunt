const express = require("express")
const morgan = require("morgan")
const axios = require("axios")
require("dotenv").config({silent: true})

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app
