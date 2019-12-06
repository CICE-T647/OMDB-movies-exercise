const express = require("express");
const bp = require("body-parser");

require("dotenv").config();

const PORT = process.env.NODE_PORT || 5000;

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use("/", require("./routes/index"));

app.use("/movies", require("./routes/movies"));

app.use((req, res) => {
    res.status(404).json({ message: "page not found" });
});

app.listen(PORT, () => console.log(`NodeJS listen to port ${PORT}`));
