import { createContext, use, useEffect, useState } from "react";

export const authContext = createContext()

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(null)

    useEffect(() => {
        if (localStorage.getItem("token") !=null) {
            setToken(localStorage.getItem("token"))
        }
    }, [])
    console.log(token);


    return (
        <authContext.Provider value={{ token, setToken }}>
            {children}
        </authContext.Provider>
    )
}