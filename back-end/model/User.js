const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  LeetCode: {type: Boolean, default: true, required: true},
  CodeForces: {type: Boolean, default: true, required: true},
})

module.exports = mongoose.model("User", userSchema)
