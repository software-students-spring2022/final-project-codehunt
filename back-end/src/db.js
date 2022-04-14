const mongoose = require('mongoose');
require('dotenv').config();

const Schema = new mongoose.Schema({
  username: String,
  password: String,
  LeetCode: Boolean,
  CodeForces: Boolean
});

const Users = mongoose.model('Users', Schema);

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database');
  }
});

module.exports = Users;
