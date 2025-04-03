import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Importa tu contexto de autenticación
import door from '../assets/door-open.svg'

function LogoutButton() {
  const { user, setUser, setIsAuthenticated, logoutUser, setErrors } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser(user); // Llama a la función logoutUser del contexto
      setUser(null); // Limpia la información del usuario en el contexto
      setIsAuthenticated(false); // Actualiza el estado de autenticación
      localStorage.removeItem('token'); // Limpia el token del almacenamiento local (si lo usas)
      setErrors([]); // Limpia los errores
      navigate('/login'); // Redirige a la página de inicio de sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Maneja el error apropiadamente (por ejemplo, muestra un mensaje de error)
    }
  };

  return (
    <button onClick={handleLogout}><img className="size-6"   src={door}/></button>
  );
}

export default LogoutButton;