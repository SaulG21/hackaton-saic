import { useState } from "react";
import { AuthContext } from "./auth.context";

interface AuthProviderProps{
    children:React.ReactNode | React.ReactNode[];
}

export const AuthProvider = function (props:AuthProviderProps){
    
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}