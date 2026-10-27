import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

const UserProvider = ({children})=>{
    const [token, setToken] = useState(false)
    const navigate = useNavigate()


    const login = (email, password) =>{
        if(!email.trim() || !password.trim() ) {
            alert("Debes completar email y contraseña.")
            return
        }
        if(password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.")
            return
        }
        alert("Iniciaste sesión con éxito!")
        setToken(true)
        navigate("/home")
    }

    const logout = ()=>{
        setToken(false)
    }

    return(
        <UserContext.Provider value={{token, logout, login}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider