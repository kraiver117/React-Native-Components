import { Theme } from "@react-navigation/native"

type ThemeAction = 
    | { type: 'set_light_theme'}
    | { type: 'set_dark_theme'}

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const ligthTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'green',
        text: '#5856D6',
        border: 'orange',
        notification: 'teal'
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'teal'
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
    switch ( action.type ) {
        case 'set_light_theme':
            return { ...ligthTheme }

        case 'set_dark_theme':
            return { ...darkTheme }

        default:
            return state;
    }
}