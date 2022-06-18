const express = require("express");

const router = express.Router();

const BASE_URL = "/personnel";

router.get(BASE_URL, (req, res, next) => {
  try {
    const file = require("../data/personnel.json");

    res.json(file);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
