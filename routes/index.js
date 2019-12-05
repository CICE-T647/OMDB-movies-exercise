const express = require("express");
const router = express.Router();
const axios = require("axios");

const URL = process.env.PLACEHOLDER_URL;
const myKey = process.env.APIKEY;
module.exports = router;

router.get("/search", async (req, res) => {
    try {
        const { search } = req.query;

        const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${myKey}&s=${search}`
        );
        res.status(200).json(response.data.Search);

        console.log(response);
    } catch (error) {
        console.log("error", error);
        res.status(400).json({ message: "Hay un problema" });
    }
});

router.get("/type", async (req, res) => {
    try {
        const { type } = req.query;
        console.log(type);
        // const response = await axios.get(
        //     `http://www.omdbapi.com/?apikey=${myKey}&s=${search}`
        // );
        res.status(200).json({ message: "entra" });
    } catch (error) {
        console.log("error", error);
        res.status(400).json({ message: "Hay un problema" });
    }
});
