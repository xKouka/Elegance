import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Elegance.svg';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, isAuthenticated, errors: LoginErrors } = useAuth(); 
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null);

    const onSubmit = handleSubmit(async (values) => {
        try {
            await signIn(values); 
        } catch (error) {
            setLoginError(error.message || 'Error al iniciar sesión');
        }
    });

    useEffect(() => {
        if (isAuthenticated) navigate('/');
    }, [isAuthenticated, navigate]);

    return (
        <div className="flex h-full flex-col content-evenly items-center">
            <div className="border-2 border-black w-4/12 h-auto p-9 rounded-lg m-36 flex flex-col shadow-lg">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-40 w-40" src={logo} alt="Logo" />
                    <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">Iniciar Sesión</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {LoginErrors.map((error, i) => (
                        <div key={i} className='bg-red-500 p-2 text-white'>
                            {error}
                        </div>
                    ))}
                    {loginError && (
                        <div className='bg-red-500 p-2 text-white'>
                            {loginError}
                        </div>
                    )}
                    <form className="space-y-6 " onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                            <div className="mt-2">
                                <input {...register("email", { required: true })} type="email" name="email" id="email" className="block w-full rounded-md border-2 border-black px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                {errors.email && (
                                    <p className='text-red-500'>El email es requerido</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input {...register("password", { required: true })} type="password" name="password" id="password" className="block w-full rounded-md border-2 border-black px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                            {errors.password && (
                                <p className='text-red-500'>La contraseña es requerida</p>
                            )}
                        </div>

                        <div>
                            <button type='submit' className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        ¿No tienes cuenta?
                        <a href="/register" className="font-semibold text-black hover:text-indigo-500">Registrarse</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;