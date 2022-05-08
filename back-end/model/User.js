const mongoose = require("mongoose")

const defaultSubscriptions = [
  {name: "Leetcode", isChecked: true},
  {name: "Codeforces", isChecked: true},
  {name: "CodeChef", isChecked: true}
]

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  subscriptions: {type: Array, default: defaultSubscriptions, required: true},
})

module.exports = mongoose.model("User", userSchema)
