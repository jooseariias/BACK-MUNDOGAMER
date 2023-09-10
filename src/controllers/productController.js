const { Product, Gender, Platform } = require("../db");

// router.post("/", productoCreacion);
// router.get("/", productosObtener);

const productoCreacion = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      precio,
      imagen,
      stock,
      year,
      trailer,
      platformId,
      genderId,
    } = req.body;

    let producto = await Product.findOne({
      where: {
        nombre,
      },
    });
    if (producto) {
      return res
        .status(201)
        .json({ mensaje: "El producto ya existe en la base de datos" });
    }

    if (!descripcion || !precio || !imagen || !stock || !year || !trailer) {
      return res.status(400).json({ mensaje: "Datos faltantes" });
    }

    producto = await Product.create({
      nombre,
      descripcion,
      precio,
      imagen,
      stock,
      year,
      trailer,
    });

    const genero = await Gender.findOne({
      where: {
        id: genderId,
      },
    });

    const plataforma = await Platform.findOne({
      where: {
        id: platformId,
      },
    });

    
    await producto.addGender(genero);
    await producto.addPlatform(plataforma);

    return res.status(200).json(producto);
  } catch (error) {
    
    return res.status(500).json({ error: error.message });
  }
};

const productosObtener = async (req, res) => {
  const productos = await Product.findAll({
    include: [{ model: Gender }, { model: Platform }],
  });

  if (productos.length) {
    return res.status(200).json(productos);
  } else {
    return res
      .status(404)
      .json({ mensaje: "No se encontraron productos en la base de datos" });
  }
};
const obtenerProductoPorId = async (req, res) => {
  const productId = req.params.id;

  try {
    const producto = await Product.findByPk(productId, {
      include: [{ model: Gender }, { model: Platform }],
    });

    if (producto) {
      return res.status(200).json(producto);
    } else {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};
module.exports = { productoCreacion, productosObtener,obtenerProductoPorId };
