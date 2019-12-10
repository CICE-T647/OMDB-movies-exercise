const express = require('express');
const router = express.Router();
const axios = require("axios");

const URL = process.env.URL_IMDB;
const API_KEY = process.env.API_KEY;

router.get("/", async (req, res) => {
    try {

        const i = req.query.i;      
        const urlGet = `${URL}/i=${i}&apikey=${API_KEY}`;
       // http://www.omdbapi.com/?i=tt3896198&apikey=[miApikey]

        const response = await axios.get(urlGet);

        console.log(response.data);
        res.status(200).json(response.data);

    } catch(error) {
        console.log(error);
        res.status(400).json({error});
    }
})

module.exports = router;