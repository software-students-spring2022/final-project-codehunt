const passportJWT = require("passport-jwt")
const User = require("../model/User.js")

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

// set up some JWT authentication options
const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt") // look for the Authorization request header
jwtOptions.secretOrKey = process.env.JWT_SECRET // an arbitrary string used during encryption - see the .env file

const jwtStrategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
  console.log("JWT payload received", jwtPayload) // debugging

  return User.findById(jwtPayload.id, (err, user) => {
    if (err) return next(err, false)
    if (user) return next(null, user)
    return next(null, false)
  })
})

module.exports = {
  jwtOptions,
  jwtStrategy,
}
