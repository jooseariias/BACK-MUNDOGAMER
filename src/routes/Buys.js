const express = require("express");
const router = express.Router();
const { Buys ,Product } = require("../db.js");


router.get("/get/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const userCartItems = await Buys.findAll({
      where: { userId },
      include: [{ model: Product, as: 'product' }], 
    });

    const userCart = userCartItems.map((item) => ({
      id: item.id,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      userId: item.userId,
      product: item.product, 
    }));

    res.status(200).json(userCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "fallo la peticion" });
  }
});



router.post("/Post", async (req, res) => {
  const { userId, productId  } = req.body;


  try {
    await Buys.create({ userId, productId, });
    res.status(201).json({ message: "agregado al carrito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "no se agrego al carrito" });
  }
});

router.delete("/Delete/:buyId", async (req, res) => {
    const buyId = req.params.buyId;
  
    try {
      const buy = await Buys.findByPk(buyId);
  
      if (!buy) {
        return res.status(404).json({ error: "No se encontro Producto" });
      }
  
      await buy.destroy();
      res.status(200).json({ message: "Producto eliminado" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "fallo la peticion" });
    }
  });


module.exports = router