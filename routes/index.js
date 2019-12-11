const express = require("express");
const router = express.Router();

const axios = require("axios");


const URL = process.env.OMDB_URL;

router.get("/:s", async (req,res) => {

    try {
    const { s } = req.params;
    const urlGet =`${URL}s=${s}`;
    
    const response = await axios.get(urlGet);

    console.log(response.data);

    res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }

})

router.get("/tipo/:type/:s", async (req,res) => {

    try {
    const { s } = req.params;
    const { type } = req.params;
    const urlGet =`${URL}type=${type}&s=${s}`;
    
    const response = await axios.get(urlGet);

    console.log(response.data);
    //console.log(urlGet);

    res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }

})

router.get("/page/:s/:page", async (req,res) => {

    const { s } = req.params;
    if(s.length < 3){
        res.status(400).json({ message: "Debe introducir al menos 3 caracteres" });
    } else {
    try {

    
    const { page } = req.params;
    const urlGet =`${URL}s=${s}&page=${page}`;
    
    const response = await axios.get(urlGet);

    console.log(response.data);
    //console.log(urlGet);

    res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }

}

})

router.get("/year/:y/:s/:page", async (req,res) => {

    const { s } = req.params;
    const { y } = req.params;
    const { page } = req.params;

    if(s.length < 3){
        res.status(400).json({ message: "Debe introducir al menos 3 caracteres" });
    } else {

    try {
     
    const urlGet =`${URL}y=${y}&s=${s}&page=${page}`;
    
    const response = await axios.get(urlGet);

    console.log(response.data);
    //console.log(urlGet);

    res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }

}

})



module.exports = router;