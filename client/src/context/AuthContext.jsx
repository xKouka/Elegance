import {useState, createContext, useContext} from 'react'
import { registerRequest, loginRequest } from '../api/auth.js'

export const AuthContext = createContext()

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if (!context) {throw new Error("error")}
    return context;

}

export const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    const[isAuthenticated, setIsAuthenticated] = useState(false)
    const[errors,setErrors] = useState([])

    const signUp = async (user) => {
        try{
            const res = await registerRequest(user);
            console.log(res.data) 
            setUser(res.data);
            setIsAuthenticated(true);
        }catch(error){
            console.log(error)
            setErrors(error.response.data)
        }
    };

    const signIn = async (user) => {
        try{
            const res = await loginRequest(user);
            console.log(res)
        }catch(error){
            if(Array.isArray(error.response.data)){
                return  setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    };


    return(
        <AuthContext.Provider value={{
            signUp,signIn,user,isAuthenticated, errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}