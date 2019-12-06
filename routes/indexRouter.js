const express = require("express");
const router = express.Router();
const axios = require("axios");

const {
  paramsLenghtValidation,
  typeValidation,
  yearValidation
} = require("../validations");

router.get("/searchbytitle/:title", async (req, res) => {
  try {
    const { title } = req.params;

    paramsLenghtValidation(title);

    const url = `${process.env.BASE_API_URL}&s=${title}`;
    const response = await axios.get(url);

    if (!response.data || response.data.lenght == 0) {
      res.status(200).json({
        message: `No existen resultados para la busqueda con ${title}`
      });
    }

    res.status(200).json(response.data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/searchbytype/:type/:title", async (req, res) => {
  try {
    const { type, title } = req.params;

    paramsLenghtValidation(title);
    typeValidation(type);

    const url = `${process.env.BASE_API_URL}&type=${type}&s=${title}`;

    const response = await axios.get(url);
    if (!response.data || response.data.lenght == 0) {
      res.status(200).json({
        message: `No existen resultados para la busqueda del tipo ${type} y el titulo ${title}`
      });
    }
    res.status(200).json(response.data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/searchbyyear/:title/:year", async (req, res) => {
  try {
    const { title, year } = req.params;

    paramsLenghtValidation(title);
    yearValidation(year);

    const url = `${process.env.BASE_API_URL}&s=${title}&y=${year}`;

    const response = await axios.get(url);
    if (!response.data || response.data.lenght == 0) {
      res.status(200).json({
        message: `No existen resultados para la busqueda del titulo ${title} y el año ${year}`
      });
    }
    res.status(200).json(response.data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/searchbyid/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const url = `${process.env.BASE_API_URL}&i=${id}&plot=full`;

    const response = await axios.get(url);

    if (!response.data || response.data.lenght == 0) {
      res.status(200).json({
        message: `No existen resultados para la id ${id}`
      });
    }
    res.status(200).json(response.data);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
