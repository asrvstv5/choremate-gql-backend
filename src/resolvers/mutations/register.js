const bcrypt = require("bcrypt");

module.exports = async (root, { name, email, password }, { models }) => {
    // Get email and password from the args object
    // { email, password } this is coming from the args(arguments) that are passed down when registering 
    let user = new models.User();
    user.email = email
    user.name = name
    // here we hash the password using bcrypt and store the hashed value in the db
    user.password = await bcrypt.hash(password, 12)
    // save the user to the db
    // it shouldn't matter what db you are using
    return user.save()
}