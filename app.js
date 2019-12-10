require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const index = require("./routes")

const app = express();

const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', index)

app.listen(port, ()=>{
    console.log("App corriendo en " + port)
})
