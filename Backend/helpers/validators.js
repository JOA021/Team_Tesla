const User = require("../models/users")

const validateAge = (age = 0) => {
    if (age < 18) {
        throw new Error("Must have more than 18 years")
    }

    return true
}

const validateEmail = async(email) => {
    const user = await User.find({email})
    
    if (user) {
        throw new Error("Email already exists")
    }

    return true
}

module.exports = {
    validateAge,
    validateEmail
}