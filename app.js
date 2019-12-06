require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const { indexRouter } = require("./routes");

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`running on ${PORT}`));
