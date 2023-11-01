const { models } = require("mongoose")
const User=require("../models/users")

const validateAge = (age = 0) => {
    if (age < 18) {
        throw new Error("Must have more than 18 years")
    }
    return true
}


const validateEmail = async (email) => {
        const respuesta_email = await User.findOne({ email: email });
        if (respuesta_email) {
            throw new Error("email exist in db try other")
        }
        return true
}
    
    



module.exports = {
    validateAge,
    validateEmail
}