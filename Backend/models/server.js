const express = require("express")
const userRouter = require("../routes/users")
const catsRouter = require("../routes/cats")
const connectMongo = require("../database/config")

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.usersPath = "/api/users"
        this.catsPath = "/api/cats"

        this.middlewares()
        this.routes()
        this.conectarMongo()
    }

    async conectarMongo() {
        await connectMongo()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        // /api/users
        this.app.use(this.usersPath, userRouter)

        // /api/cats
        this.app.use(this.catsPath, catsRouter)
    }

    listen() {
        this.app.listen(this.port, "0.0.0.0", ()=> {
            console.log("Servidor ejecutandose en", this.port)
        })
    }
}

module.exports = Server;