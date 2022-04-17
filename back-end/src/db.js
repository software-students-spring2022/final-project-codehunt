const mongoose = require("mongoose")

const User = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
})

mongoose.model("User", User)
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas"))
