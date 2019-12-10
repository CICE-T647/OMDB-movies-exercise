const express = require("express");
const router = express.Router();
const axios = require("axios");

const URL = process.env.PLACEHOLDER_URL;
const myKey = process.env.APIKEY;
module.exports = router;

router.get("/searchbytitle", async (req, res) => {
    try {
        const { search } = req.query;
        if (search.length < 3) {
            res.status(200).json({ message: "Bad Parameters: Type not found" });
        }
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

router.get("/:type/:title", async (req, res) => {
    try {
        const { type, title } = req.params;
        console.log("title", title);
        console.log("type", type);
        if (type === undefined || type.length < 3 || title.length < 3) {
            res.status(200).json({ message: "Bad Parameters: Type not found" });
        }
        const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${myKey}&type=${type}&s=${title}`
        );
        console.log("response", response.data.Search);

        res.status(200).json(response.data.Search);
    } catch (error) {
        console.log("error", error);
        res.status(400).json({ message: "Hay un problema" });
    }
});

router.get("/searchbyyear/:year/:title", async (req, res) => {
    try {
        const { year, title } = req.params;
        console.log("year", year);
        console.log("title", title);
        if (year === undefined || year.length < 3 || title.length < 3) {
            res.status(200).json({ message: "Bad Parameters: Type not found" });
        }
        const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${myKey}&y=${year}&s=${title}`
        );
        console.log("response", response.data.Search);

        res.status(200).json(response.data.Search);
    } catch (error) {
        console.log("error", error);
        res.status(400).json({ message: "Hay un problema" });
    }
});
