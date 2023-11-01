const {SaveReceta, CreateReceta} = require ("../controllers/recetas")
const {Router} = require("express")

const recetaRouter = Router()

recetaRouter.post("/recetas",CreateReceta)
recetaRouter.post("/save",SaveReceta)

module.exports =recetaRouter
