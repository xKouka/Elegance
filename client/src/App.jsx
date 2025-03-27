import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";





function App(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= {<HomePage/>}/>
                    <Route path="cart" element= {<CartPage/>}/>
                    <Route path="/login" element= {<LoginPage/>}/>
                    <Route path="/register" element= {<RegisterPage/>}/>
                    <Route path="/about" element= {<AboutPage/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
export default App