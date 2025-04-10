import React, { useState } from 'react';
import { CreateProduct } from '../service/product.service';
import productApi from '../api/product.api';

function ProductManagerPage() {
  const [productData, setProductData] = useState({
    tittle: '',
    price: 0,
    img: '',
    count: 0,
    type: '',
    size: 'S',  // Cambié el valor inicial de size a 'S'
  });

  const [productIdToDelete, setProductIdToDelete] = useState('');
  const [searchName, setSearchName] = useState('');
  const [foundProductId, setFoundProductId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CreateProduct(productData);
      alert('Producto agregado con éxito');
      setProductData({
        tittle: '',
        price: 0,
        img: '',
        count: 0,
        type: '',
        size: 'S', // Resetear a "S" después de agregar el producto
      });
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      alert('Error al agregar el producto');
    }
  };

  const handleDelete = async () => {
    try {
      await productApi.delete(`/product/${productIdToDelete}`);
      alert('Producto eliminado con éxito');
      setProductIdToDelete('');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      alert('Error al eliminar el producto');
    }
  };

  const handleSearch = async () => {
    try {
      const res = await productApi.get(`/product?tittle=${searchName}`);
      console.log('Resultado búsqueda:', res.data);
  
      if (Array.isArray(res.data) && res.data.length > 0) {
        setFoundProductId(res.data[0]._id); // Primer coincidencia
      } else {
        setFoundProductId('No encontrado');
      }
    } catch (error) {
      console.error('Error al buscar el producto:', error);
      alert('Error al buscar el producto');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto space-y-10">
        {/* Agregar Producto */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-xl font-bold mb-4 text-center">Agregar Producto</h2>
          {['tittle', 'price', 'img', 'count'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 text-sm font-bold mb-2 capitalize">{field}</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type={field === 'price' || field === 'count' ? 'number' : 'text'}
                name={field}
                value={productData[field]}
                onChange={handleChange}
              />
            </div>
          ))}

          {/* Campo "type" como select */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tipo</label>
            <select
              name="type"
              value={productData.type}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            >
              <option value="">Selecciona un tipo</option>
              <option value="collar">collar</option>
              <option value="pulsera">pulsera</option>
              <option value="anillo">anillo</option>
            </select>
          </div>

          {/* Campo "size" como select */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tamaño</label>
            <select
              name="size"
              value={productData.size}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Agregar Producto
          </button>
        </form>

        {/* Eliminar Producto */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-xl font-bold mb-4 text-center">Eliminar Producto</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">ID del Producto</label>
            <input
              type="text"
              value={productIdToDelete}
              onChange={(e) => setProductIdToDelete(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Eliminar Producto
          </button>
        </div>

        {/* Buscar ID por nombre */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-xl font-bold mb-4 text-center">Buscar ID por Nombre</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nombre del Producto</label>
            <input
              type="text"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Buscar ID
          </button>
          {foundProductId && (
            <div className="mt-4 text-center text-sm text-gray-700">
              <strong>ID encontrado:</strong> {foundProductId}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductManagerPage;
