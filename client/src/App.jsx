import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage"; 
import DeleteProductPage from "./pages/DeleteProductPage.jsx";
import { AplicationProvider } from './context/AplicationContext';


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
          </Routes>
        </AuthProvider>
      </AplicationProvider>

      <Routes>
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/deleteProduct" element={<DeleteProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;