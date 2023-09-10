const express = require("express");

const router = express.Router();

const {
  productoCreacion,
  productosObtener,
} = require("../controllers/productController");

router.post("/", productoCreacion);
router.get("/", productosObtener);

module.exports = router;
