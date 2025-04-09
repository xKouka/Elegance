import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AplicationProvider } from './context/AplicationContext';  // Asegúrate de importar AplicationProvider
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import DeleteProductPage from "./pages/DeleteProductPage"; 

function App() {
  return (
    <BrowserRouter>
      <AplicationProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/producto/:productId" element={<ProductPage />} />
              <Route path="/addproduct" element={<AddProductPage />} />
              <Route path="/deleteProduct" element={<DeleteProductPage />} />
            </Routes>
          </AuthProvider>
      </AplicationProvider>
    </BrowserRouter>
  );
}

export default App;
