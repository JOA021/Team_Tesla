const {Schema, model}= require("mongoose")

const RecetaSchema= Schema(
    {
        id:{
            type:Number
        },
        userId:{ 
            type:Number
        },
        ingredients:{
            type: String
        },
        recipeOutput:{
            type:Object,
            required: [true, "El nombre es obligatorio"]

        },
        dateCreated: {
            type: Date
        }
    }
)

module.exports=model("Receta",RecetaSchema)
