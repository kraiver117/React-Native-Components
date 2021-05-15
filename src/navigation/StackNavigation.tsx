import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../views/Home';
import { Other } from '../views/Other';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Other" component={Other} />
        </Stack.Navigator>
    );
}