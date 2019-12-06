const express = require("express");
const router = express.Router();
const axios = require("axios");

const apikey = process.env.API_KEY;

const items_type = ["movie", "series", "episode"];

const createAxios = axios.create({
    baseURL: process.env.API_URL,
    timeout: 3000,
    headers: { "X-Custom-Header": "foobar" }
});

router.get("/", (req, res) => {
    res.status(200).json({ message: "OK movies root" });
});

router.get("/search/:title", async (req, res) => {
    const { title } = req.params;
    if (title.length < 3)
        res.status(422).json({
            message: "Bad Parameters: Title - 3 or more characters are required"
        });
    try {
        movieSearch = await createAxios.get(`/?s=${title}&apikey=${apikey}`);
        res.status(200).json(movieSearch.data);
    } catch (error) {
        res.status(500).json({ message: "API call not found" });
    }
});

router.get("/search/:type/:title", async (req, res) => {
    const { type, title } = req.params;
    if (!items_type.includes(type))
        res.status(422).json({
            message: "Bad Parameters: Item type not found"
        });
    if (title.length < 3)
        res.status(422).json({
            message: "Bad Parameters: Title - 3 or more characters are required"
        });
    try {
        movieSearch = await createAxios.get(
            `/?s=${title}&type=${type}&apikey=${apikey}`
        );
        res.status(200).json(movieSearch.data);
    } catch (error) {
        res.status(500).json({ message: "API call not found: Please, retry" });
    }
});

router.get("/search/:type/:year/:title", async (req, res) => {
    const { type, year, title } = req.params;
    if (!items_type.includes(type))
        res.status(422).json({
            message: "Bad Parameters: Item type not found"
        });
    if (!Number(year))
        res.status(422).json({
            message: "Bad Parameters: Year - number is required"
        });
    if (title.length < 3)
        res.status(422).json({
            message: "Bad Parameters: Title - 3 or more characters are required"
        });
    try {
        movieSearch = await createAxios.get(
            `/?s=${title}&type=${type}&y=${year}&apikey=${apikey}`
        );
        res.status(200).json(movieSearch.data);
    } catch (error) {
        res.status(500).json({ message: "API call not found: Please, retry" });
    }
});

router.get("/extended/search/:title", async (req, res) => {
    const { title } = req.params;
    const fullResponse = [];
    if (title.length < 3)
        res.status(422).json({
            message: "Bad Parameters: Title - 3 or more characters are required"
        });
    try {
        movieSearch = await createAxios.get(`/?s=${title}&apikey=${apikey}`);
        for (const movie of movieSearch.data.Search) {
            fullMovieSearch = await createAxios.get(
                `/?i=${movie.imdbID}&apikey=${apikey}`
            );
            fullResponse.push(fullMovieSearch.data);
        }
        movieSearch.data.Search = fullResponse;
        res.status(200).json(movieSearch.data);
    } catch (error) {
        res.status(500).json({ message: "API call not found: Please, retry" });
    }
});

module.exports = router;
