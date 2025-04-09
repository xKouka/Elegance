import mongoose from 'mongoose';

const carritoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productos: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      cantidad: { type: Number, default: 1 }
    }
  ]
});

export default mongoose.model('Carrito', carritoSchema);
