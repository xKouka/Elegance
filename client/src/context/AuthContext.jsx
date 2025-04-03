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
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logoutUser = async (user) => {
    try {
      await logout(user); // Llama a la función logout de tu API
      setUser(null);
      setIsAuthenticated(false);
      setErrors([]); // Limpia los errores
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Maneja el error apropiadamente (por ejemplo, muestra un mensaje de error)
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
        logoutUser, // Agrega logoutUser al contexto
        setErrors, // Agrega setErrors al contexto
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};