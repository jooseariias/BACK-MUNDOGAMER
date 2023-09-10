const express = require("express");

const router = express.Router();
const { body } = require("express-validator");

const { userLogin, userRegister } = require("../controllers/authController");

router.post("/login", userLogin);
router.post("/registrarse", userRegister);
module.exports = router;
