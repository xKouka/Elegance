import carrito from '../assets/handbag.svg';
import logo from '../assets/EleganceH.svg';
import { useAuth } from '../context/AuthContext';
import LogoutButton from './logoutButton';

function Header() {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="flex flex-row justify-between shadow-xl bg-slate-950 w-auto h-20 content-center text-white">
      <div className="ml-28">
        <img src={logo} className="-mt-8 w-auto h-36" alt="Logo" />
      </div>

      <div className="flex flex-row justify-start items-center gap-12 mr-24">
        <a href="/">
          <button className="rounded-xl h-8 w-16 border-2 outline-white hover:bg-white hover:text-black">Inicio</button>
        </a>
        <a href="/about">
          <button className="rounded-xl h-8 w-32 border-2 outline-white hover:bg-white hover:text-black">Quienes somos</button>
        </a>
        {isAuthenticated ? (
          <div className="gap-10">
            <span className="text-white text-xl m-5">
              {user?.name || 'Usuario'}
            </span>
            <LogoutButton />
          </div>
        ) : (
          <a href="/login">
            <button className="rounded-xl h-8 w-28 border-2 outline-white hover:bg-white hover:text-black">Iniciar sesion</button>
          </a>
        )}
        <a href="/cart">
          <button className="rounded-xl h-3">
            <img src={carrito} alt="carrito" className="size-8" />
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;