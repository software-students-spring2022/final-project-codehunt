const mongoose = require("mongoose")
const Contest = require("../../model/Contest.js")
require("dotenv").config({path: "../../.env"})
const fs = require("fs")

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB Atlas")
    })
    .then(() => {
      const data = JSON.parse(fs.readFileSync("contests.json"))
      console.log(data)
      data.forEach((element) => {
        new Contest({
          platform: element.platform,
          name: element.name,
          timeStart: element.timeStart,
          timeEnd: element.timeEnd,
          url: element.url,
          logo: element.logo,
        }).save()
      })
      console.log("data saved, press ctrl+c to end")
    })
