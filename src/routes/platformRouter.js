const express = require("express");

const router = express.Router();

const { plataformasObtener } = require("../controllers/platformController");

router.get("/", plataformasObtener);

module.exports = router;
