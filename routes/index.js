const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "OK root" });
});

router.get("/index", (req, res) => {
    res.status(200).json({ message: "OK index" });
});

module.exports = router;
