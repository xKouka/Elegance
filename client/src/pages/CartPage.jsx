import React from 'react';
import Header from '../components/Header.jsx';
import Producto from '../components/Producto.jsx';
import Footer from '../components/Footer.jsx';
import { useCart } from '../context/CartContext'; // Importamos el contexto del carrito
import { useNavigate } from 'react-router-dom'; // Importamos el hook useNavigate

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart(); // Obtenemos los productos del carrito y las funciones
  const navigate = useNavigate(); // Inicializamos el hook para la navegación

  // Función para eliminar un producto del carrito
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  // Función para vaciar el carrito y redirigir a la página principal
  const handleClearCart = () => {
    clearCart(); // Vaciar el carrito
    navigate('/'); // Redirigir al inicio
  };

  return (
    <div className="flex flex-col min-h-screen"> {/* Aquí aplicamos flexbox y min-h-screen */}
      <Header />
      <div className="flex flex-col items-center w-full flex-grow"> {/* El contenido crecerá para llenar el espacio */}
        {cart.length === 0 ? (
          <p className="text-center text-xl mt-4">El carrito está vacío</p>
        ) : (
          <>
            {cart.map((product) => (
              <Producto
                key={product._id}
                product={product}
                onRemove={() => handleRemove(product._id)} // Función para eliminar
              />
            ))}
            <div className="mt-4 flex gap-6">
              <button
                className="border-black bg-white border-2 text-2xl rounded-full h-14 w-36 hover:bg-black hover:text-white hover:border-black"
                onClick={handleClearCart}
              >
                Vaciar
              </button>
              <button
                className="border-black bg-white border-2 text-2xl rounded-full h-14 w-36 hover:bg-black hover:text-white hover:border-black"
                onClick={handleClearCart} // Llamar a handleClearCart al hacer clic
              >
                Comprar
              </button>
            </div>
          </>
        )}
        <div className="mt-6">
          <a href="/">
            <button
              className="border-black bg-white border-2 text-2xl rounded-full h-14 w-36 hover:bg-black hover:text-white hover:border-black"
            >
              Volver
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
