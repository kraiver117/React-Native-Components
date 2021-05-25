import React, { createContext, useReducer } from "react";
import { themeReducer, ThemeState, ligthTheme } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
    const [theme, dispatch] = useReducer(themeReducer, ligthTheme); //TODO: Leer el tema global del dispositivo

    const setDarkTheme = () => {
        console.log('setDarkTheme');
    }

    const setLightTheme = () => {
        console.log('setLightTheme');
        
    }
    
    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}