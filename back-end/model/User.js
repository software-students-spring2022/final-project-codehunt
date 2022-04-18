const mongoose = require("mongoose")

<<<<<<< HEAD
const User = new mongoose.Schema({
=======
<<<<<<<< HEAD:back-end/model/User.js
const userSchema = new mongoose.Schema({
>>>>>>> d0c69e2e273408b864a7847d14d5e1d780968944
  email: {type: String, required: true},
  password: {type: String, required: true},
  LeetCode: {type: Boolean, default: true, required: true},
  CodeForces: {type: Boolean, default: true, required: true},
})

<<<<<<< HEAD

module.exports = mongoose.model("User", User)
=======
module.exports = mongoose.model("User", userSchema)
========

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas"))

>>>>>>>> d0c69e2e273408b864a7847d14d5e1d780968944:back-end/src/db.js
>>>>>>> d0c69e2e273408b864a7847d14d5e1d780968944
