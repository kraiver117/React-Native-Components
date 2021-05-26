import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { themeReducer, ThemeState, ligthTheme, darkTheme } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
    // const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(
        themeReducer, 
        (Appearance.getColorScheme() === 'dark') ? darkTheme : ligthTheme
    );

    //---Just work in iOS---
    // useEffect(() => {
    //     (colorScheme  === 'light')
    //         ? setLightTheme()
    //         : setDarkTheme?()
    // }, [colorScheme]);

    //---Work for Android and iOS to listen the OS theme--//
    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme()  === 'light')
                    ? setLightTheme()
                    : setDarkTheme()
            }
        });
    }, []);

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