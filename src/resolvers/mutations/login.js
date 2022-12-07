const pick = require("lodash").pick;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = async (root, { email, password }, { models, SECRET }) => {
    // The secret is coming from the context that will pass to Apollo Server
      // the next lines basically check if the user exist or not
      const user = await models.User.findOne({ email })
      if (!user) {
        throw new Error('No user found ')
      }
      // user.password contains the hashed password
      // we use bcrypt again to compare with the password from the args
      const isValid = await bcrypt.compare(password, user.password)
      if (!isValid) {
        throw new Error('Incorrect password ')
      }
      //   sign in the user
      // create the token specifically for the user and return the token
      // you can specify how long the token will take to expire, this is up to you
      const token = await jwt.sign(
        {
          user: pick(user, ['_id', 'email']),
        },
        SECRET,
        // this token will last for a year, this should be adjusted accordingly
        { expiresIn: '1y' }
      )
      // so basically we don't do much here, we only return the token when the user successfully logs in
      return token
}