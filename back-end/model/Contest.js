const mongoose = require("mongoose")


const contestSchema = new mongoose.Schema({
  platform: {type: String, required: true},
  name: {type: String, required: true},
  timeStart: {type: String, required: true},
  timeEnd: String,
  url: {type: String, required: true},
  logo: {type: String, required: true},
})

module.exports = mongoose.model("Contest", contestSchema)
