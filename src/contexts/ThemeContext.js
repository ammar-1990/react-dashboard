import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const DarkTheme=createContext();

export const DarkThemeProvider =({children})=>{

    const [dark,setDark]=useState(JSON.parse(localStorage.getItem('dark')) || false)

    useEffect(()=>{
        localStorage.setItem('dark',JSON.stringify(dark))

    },[dark])
    return (

        <DarkTheme.Provider value={{dark,setDark}}>
            {children}
        </DarkTheme.Provider>
    )



}

export default DarkTheme;

