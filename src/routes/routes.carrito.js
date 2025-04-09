import express from 'express';
import Carrito from '../models/Carrito.js';

const router = express.Router();

router.post('/carrito', async (req, res) => {
  const { userId, productId, cantidad } = req.body;
  try {
    const carrito = await Carrito.findOne({ userId });
    if (carrito) {
      const productIndex = carrito.productos.findIndex(item => item.productId.toString() === productId);
      if (productIndex !== -1) {
        carrito.productos[productIndex].cantidad += cantidad;
      } else {
        carrito.productos.push({ productId, cantidad });
      }
      await carrito.save();
    } else {
      const newCarrito = new Carrito({ userId, productos: [{ productId, cantidad }] });
      await newCarrito.save();
    }
    res.status(200).send('Producto añadido al carrito');
  } catch (error) {
    res.status(500).send('Error al añadir producto al carrito');
  }
});

router.get('/carrito/:userId', async (req, res) => {
  try {
    const carrito = await Carrito.findOne({ userId: req.params.userId }).populate('productos.productId');
    if (!carrito) return res.status(404).send('Carrito no encontrado');
    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).send('Error al obtener el carrito');
  }
});

export default router;
