import { useState, createContext, useContext } from 'react';
import { registerRequest, loginRequest, logout } from '../api/auth.js'; // Importa la función logout

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [errors, setErrors] = useState([]);

  const signUp = async (userData) => {
    try {
      const res = await registerRequest(userData);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
  
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('isAuthenticated', 'true');
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  

  const logoutUser = async () => {
    try {
      await logout(); // No necesitas pasar user aquí
      setUser(null);
      setIsAuthenticated(false);
      setErrors([]);
  
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        user,
        isAuthenticated,
        errors,
        logoutUser,
        setErrors,
        setUser, // ✅ expuesto al contexto
        setIsAuthenticated // ✅ expuesto al contexto
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};