const express = require("express");
const router = express.Router();
const axios = require("axios");

const URL = process.env.JSON_OMDB_URL;

router.get("/search&titulo=:t", async (req,res)=> {

    try {
        const { t } = req.params;

        const urlGet = `${URL}&t=${t}`;

        console.log(urlGet);
        
        const response = await axios.get(urlGet);
        
        res.status(200).json(response.data)
    }catch(e){
        console.log(e);
        res.status(400).json({message: "Hubo un problema"})
    }

})

router.get("/search&titulo=:t&tipo=:type", async (req,res)=> {

    try {
        const { t, type } = req.params;

        const urlGet = `${URL}&t=${t}&type=${type}`;

        console.log(urlGet);
        
        const response = await axios.get(urlGet);
        
        res.status(200).json(response.data)
    }catch(e){
        console.log(e);
        res.status(400).json({message: "Hubo un problema"})
    }

})

router.get("/search&titulo=:t&year=:y", async (req,res)=> {

    try {
        const { t, y } = req.params;

        const parseYear = parseInt(y);

        const urlGet = `${URL}&t=${t}&y=${parseYear}`;

        console.log(urlGet);
        
        const response = await axios.get(urlGet);
        
        res.status(200).json(response.data)
    }catch(e){
        console.log(e);
        res.status(400).json({message: "Hubo un problema"})
    }

})

router.use((req,res)=>{
    res.status(404).json({message: "No encontrado"});
})

module.exports = router;