const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/searchbytitle/:title", async (req, res) => {
  try {
    const { title } = req.params;

    const url = `${process.env.BASE_API_URL}&s=${title}`;

    const response = await axios.get(url);

    res.status(200).json(response.data.Search);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/searchbytype/:type/:title", async (req, res) => {
  try {
    const { type, title } = req.params;
    console.log(req.params);

    const url = `${process.env.BASE_API_URL}&type=${type}&s=${title}`;

    const response = await axios.get(url);

    res.status(200).json(response.data.Search);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
