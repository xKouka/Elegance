import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import {AplicationProvider} from './context/AplicationContext'





function App(){
    return(
        <AuthProvider>
            <AplicationProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element= {<HomePage/>}/>
                        <Route path="/cart" element= {<CartPage/>}/>
                        <Route path="/login" element= {<LoginPage/>}/>
                        <Route path="/register" element= {<RegisterPage/>}/>
                        <Route path="/about" element= {<AboutPage/>}/>
                        <Route path="/producto/:productId" element= {<ProductPage/>}/>
                    </Routes>
                </BrowserRouter>
            </AplicationProvider>
        </AuthProvider>
    )
}
export default App