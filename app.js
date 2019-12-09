require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const index = require("./routes");

app.use("/", index);

app.listen(PORT, ()=> console.log(`Servidor escuchando el puerto ${PORT}`));