import carrito from '../assets/handbag.svg';
import logo from '../assets/EleganceH.svg';
import { useAuth } from '../context/AuthContext';
import LogoutButton from './LogoutButton';

function Header() {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="flex flex-row justify-between items-center shadow-xl bg-slate-950 w-full h-20 text-white">
      <div className="ml-12">
        <img src={logo} className="size-36" alt="Logo" />
      </div>

      <div className="flex flex-row justify-end items-center gap-6 mr-12 w-2/3">
        <a href="/">
          <button className="rounded-xl h-8 w-16 border-2 outline-white hover:bg-white hover:text-black">
            Inicio
          </button>
        </a>
        <a href="/about">
          <button className="rounded-xl h-8 w-32 border-2 outline-white hover:bg-white hover:text-black">
            Quienes somos
          </button>
        </a>
        {isAuthenticated ? (
          <div className="flex gap-5 items-center">
            <span className="text-white text-xl">{user?.name || 'Usuario'}</span>
            <LogoutButton />
          </div>
        ) : (
          <a href="/login">
            <button className="rounded-xl h-8 w-28 border-2 outline-white hover:bg-white hover:text-black">
              Iniciar sesión
            </button>
          </a>
        )}
        <a href="/cart">
          <button className="rounded-xl p-2">
            <img src={carrito} alt="carrito" className="w-10 h-10" />
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
