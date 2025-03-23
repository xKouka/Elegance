import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'

function RegisterPage() {
    
    const {register, handleSubmit, formState: {errors}, } = useForm();
    const {signUp, isAuthenticated, errors: RegisterErrors} = useAuth();
    const navigation = useNavigate();

    const onSubmit = handleSubmit (async (values) => {
        signUp(values);
})
    useEffect(() => {
        if (isAuthenticated) navigation("/");
    }, [isAuthenticated, navigation]);


return (
    <div className="flex h-full flex-col content-evenly items-center">
        <div className="bg-gray-700 w-4/12 h-auto p-9 rounded-lg m-36 flex flex-col shadow-lg">
            <div className="sm:mx-auto sm:w-full mt-9 sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="../../public/image.png" alt="Your Company"/>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Iniciar sesion</h2>
            </div>
            
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {
                    RegisterErrors.map((error, i ) => {
                        <div key={1} className='bg-red-500 p-2 text-white'>
                            {error}
                        </div>
                    })
                }
                <form className="space-y-6 " onSubmit={onSubmit} >
                    <div>
                        <label for="nombre" className="block text-sm/6 font-medium text-gray-900">Nombre</label>
                        <div className="mt-2">
                            <input  type="text" name="name" id="name" {...register("name", {requeride: true})} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                            {errors.name && (
                                <p className='text-red-500'>El nombre es requerido</p>
                        )}
                        </div>
                    </div>

                    <div>
                        <label for="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                        <div className="mt-2">
                            <input {...register("email", {requeride: true})} type="email" name="email" id="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                            {errors.email && (
                                <p className='text-red-500'>El email es requerido</p>
                        )}
                        </div>
                    </div>
            
                    <div>
                        <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                        <input {...register("password", {requeride: true, minLength: 6})} type="password" name="password" id="password"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                        {errors.password && (
                                <p className='text-red-500'>La contraseña es requerida</p>
                        )}
                    </div>
            
                    <div>
                        <button type='submit' className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Registrarse 
                        </button>
                    </div>
                </form>
            
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    ¿Ya tienes cuenta?
                    <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">Inicia sesion</a>
                </p>
            </div>
        </div>
    </div>
    )
}

export default RegisterPage;