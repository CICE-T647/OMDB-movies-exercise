require("dotenv").config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const PORT = process.env.PORT //con process.env accedemos a la variable de entorno

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rutas
const index = require("./routes");
app.use("/", index); 

app.listen(PORT, () => console.log("Servidor escuchando en el puerto", PORT));
