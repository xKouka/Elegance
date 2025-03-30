import {useState, createContext, useContext} from 'react'


export const AplicationContext = createContext()

export const useAplication = () =>{
    const context = useContext(AplicationContext)
    if (!context) {throw new Error("error")}
    return context;

}

export const AplicationProvider = ({children}) => {

    const [product, setProduct] = useState([])
    const [paramsTittle, setParamsTittle] = useState("")
    const [paramsType, setParamsType] = useState("")

    return(
        <AplicationContext.Provider value={{
            product, setProduct, paramsTittle, paramsType, setParamsTittle, setParamsType
        }}>
            {children}
        </AplicationContext.Provider>
    )
}