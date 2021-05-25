import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'string',
    // background: 'gray',
    // card: 'string',
    // text: 'string',
    // border: 'string',
    // notification: 'string'
  }
}

const App = () => {
  return (
    <NavigationContainer
      theme={ customTheme }
    >
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App; 