const express = require("express");
const router = express.Router();
const mercadopago = require('mercadopago');
const { User, Product, Ventas } = require("../db.js");

// Configuración de Mercado Pago
mercadopago.configure({
    access_token: 'TEST-8219807936484155-090418-605274a5297be0660b696d03de1b859a-1469275965',
});


router.get('/ventas', async (req, res) => {
    try {

        const ventas = await Ventas.findAll();
        res.json(ventas);
    } catch (error) {
        console.error('Error en la solicitud:', error);
        res.status(500).json({ error: 'Error al obtener las ventas' });
    }
});




router.post('/comprar', async (req, res) => {
    try {
        const { producto: productoData, idUser } = req.body; 


        // Validación de datos del producto (debes realizar una validación más robusta)
        if (!productoData || !productoData.nombre || !productoData.precio) {
            throw new Error('Los datos del producto son inválidos');
        }

        // Obtenemos el usuario que realiza la compra (puedes obtenerlo según tu autenticación)
        const usuario = await User.findOne({
            where: { id: idUser }
        });
        

        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }

        // Crear la venta en la base de datos
        const venta = await Ventas.create({
            fecha: new Date(),
            UserId: usuario.id // Asigna el ID del usuario a la venta
        });
      

        // Buscamos el producto por su ID
        const producto = await Product.findByPk(productoData.id);


        if (!producto) {
            throw new Error('Producto no encontrado');
        }

        // Asigna el ID de la venta a la relación entre Producto y Ventas
        await producto.addVentas(venta);

        const preference = {
            items: [
                {
                    id:producto.id,
                    title: producto.nombre,
                    unit_price: parseFloat(producto.precio),
                    quantity: 1,
                },
            ],
        };

        const response = await mercadopago.preferences.create(preference);
        const payment_url = response.body.init_point;

        console.log('Venta registrada en la base de datos:', venta);
        res.json({ payment_url });
    } catch (error) {
        console.error('Error en la solicitud:', error);
        res.status(400).json({ error: 'Solicitud inválida' });
    }
});
// ...


module.exports = router;
