require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const URL = process.env.URL;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const index = require("./routes/");

//rutas
app.use("/", index);

app.use((request,response) => {
    response.status(404).json({message:"Not found"});
});



app.listen(PORT, () => console.log("Servidor escuchando en el puerto", PORT));