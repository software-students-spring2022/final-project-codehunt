const mongoose = require("mongoose")

const User = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  LeetCode: {type: Boolean, default: true, required: true},
  CodeForces: {type: Boolean, default: true, required: true},
})

mongoose.model("User", User)
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas"))
