const { response } = require("express")
const Receta = require ("../models/recetas")
const { Configuration, OpenAIApi } = require("openai");

/******************************************* */
const SaveReceta =async (request,response) => {
let receta =request.body
console.log(receta)
let newReceta= await Receta.create(receta)
response.json({ status: "success", message: "receta creada" });
}

/******************************************* */

const CreateReceta = async (request, response) => {
    let receta = request.body;
    console.log(receta);

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY; 

    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
    };

    const data = {
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: `Actua como un Chef colombiano, necesito una receta con los siguientes ingredientes: ${receta.ingredients}, solo genera la receta e incluye unicamente los ingredientes que te pase` 
        }],
        temperature: 0.7
    };

    try {
        const openaiResponse = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        const responseData = await openaiResponse.json();
        const plato_generado = responseData.choices[0].message.content;
        response.json({ message:plato_generado});

        console.log (plato_generado)
        
    } catch (error) {
        console.error("Error al hacer la petición a OpenAI:", error);
        response.status(500).send("Error al comunicarse con OpenAI");
    }
};

module.exports ={
    SaveReceta,
    CreateReceta

}