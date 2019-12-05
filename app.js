require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const index = require("./routes");

app.use("/movies", index);

app.listen(PORT, () => console.log("servidor escuchando en puerto", PORT));
