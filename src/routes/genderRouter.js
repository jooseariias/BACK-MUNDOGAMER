const express = require("express");

const router = express.Router();

const { generosObtener } = require("../controllers/genderController");

router.get("/", generosObtener);

module.exports = router;
