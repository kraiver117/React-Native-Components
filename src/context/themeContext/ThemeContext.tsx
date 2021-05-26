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
        dispatch({ type: 'set_dark_theme'});
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme'});
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