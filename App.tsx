import 'react-native-gesture-handler';
import React from 'react';
// import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'string',
//     background: 'gray',
//     card: 'string',
//     text: 'string',
//     border: 'string',
//     notification: 'string'
//   }
// }

const App = () => {
  return (
    <AppState>
      {/* <NavigationContainer
        // theme={ customTheme }
      > */}
        <StackNavigation />
      {/* </NavigationContainer> */}
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  );
}

export default App; 