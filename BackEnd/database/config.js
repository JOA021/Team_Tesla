const mongoose =require("mongoose")
const connectMongo =async() => {
    try {
        await mongoose.connect(process.env.MONGO_HOST)
        console.log("conexion establecida en la base de datos")

    } catch (error) {
        console.log(error)
    }
}

module.exports =connectMongo