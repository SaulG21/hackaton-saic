import {  createContext } from "react"

interface AuthContextProps{
    isAuth:boolean;
    setIsAuth:any;
}

export const AuthContext = createContext<AuthContextProps|undefined>(undefined);