// ||===================|| //
// ||                   || //
// ||   OMDB EXERCISE   || //
// ||        JSC        || //
// ||                   || //
// ||===================|| //

// Packages
require("dotenv").config();
const express = require('express')
const app = express()
const bodyParser = require("body-parser")

// const fs = require("fs")

// Methods
const {
} = require("./methods")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 

// Port
const PORT = process.env.PORT || 5000



    //////////////
   //          //
  //   CODE   //
 //          //
//////////////


const index = require("./routes/")
app.use("/", index)






app.use( ( req, res ) => res.status(404).json( { meesage: "Page not found." } ) )
 
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}.`))