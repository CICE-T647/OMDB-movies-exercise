require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const index = require("./routes/");


app.use("/", index);



app.use((req, res) => {
    res.status(404).json({ message: "No encontrado" });
});

app.listen(PORT, () => console.log("Servidor escuchando en puerto", PORT));