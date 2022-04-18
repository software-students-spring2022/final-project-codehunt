const mongoose = require("mongoose")

const User = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  LeetCode: {type: Boolean, default: true, required: true},
  CodeForces: {type: Boolean, default: true, required: true},
})


const Contest = new mongoose.Schema({
  name: String,
  logo: String,
  start_date: String,
  end_date: String,
  description: String,
  url: String,
})


mongoose.model("User", User)
mongoose.model("Contest", Contest)
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas"))

