const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const google = require("../routes/authGoogle");
const { obtenerProductoPorId } = require('../controllers/productController');

const router = Router();
const authRouter = require("./authRouter");
const productRouter = require("./productRouter");
const genderRouter = require("./genderRouter");
const platformRouter = require("./platformRouter");
const usuarios = require("../routes/User")
const carrito = require("../routes/Buys")
const favoritos = require("../routes/Favorit")
const Compra = require("../routes/MercadoPago")
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/google", google);
router.use("/auth", authRouter);
router.use("/producto", productRouter);
router.use("/genero", genderRouter);
router.use("/plataforma", platformRouter);
router.get('/:id', obtenerProductoPorId);
router.use("/User",usuarios)
router.use("/carrito",carrito)
router.use("/Favoritos",favoritos)
router.use("/Mp",Compra)



module.exports = router;
