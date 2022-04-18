const mongoose = require("mongoose")

const defaultSubscriptions = [
  {name: "Leetcode", isChecked: true},
  {name: "Hackerank", isChecked: true},
]


const User = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  subscriptions: {type: Array, default: defaultSubscriptions},
})

mongoose.model("User", User)
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas"))

