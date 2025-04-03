import React, { useState } from 'react';
import productApi from '../api/product.api';

function DeleteProductPage() {
  const [productId, setProductId] = useState('');

  const handleDelete = async () => {
    try {
      await productApi.delete(`/product/${productId}`);
      alert('Producto eliminado con éxito');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      alert('Error al eliminar el producto');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">ID del Producto</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleDelete}
          >
            Eliminar Producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductPage;