import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../views/Home';
import { Other } from '../views/Other';
import { Animation101 } from '../views/Animation101';
import { Animation102 } from '../views/Animation102';
import { SwitchScreeen } from '../views/SwitchScreen';
import { AlertScreen } from '../views/AlertScreen';
import { TextInputScreen } from '../views/TextInputScreen';
import { PullToRefreshScreen } from '../views/PullToRefreshScreen';
import { SectionListScreen } from '../views/SectionListScreen';
import { ModalScreen } from '../views/ModalScreen';
import { InfiniteScrollScreen } from '../views/InfiniteScrollScreen';
import { SlidesScreen } from '../views/SlidesScreen';
import { ChangeThemeScreen } from '../views/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        // backgroundColor: 'white'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Animation101" component={Animation101} />
                <Stack.Screen name="Animation102" component={Animation102} />
                <Stack.Screen name="Switch" component={SwitchScreeen} />
                <Stack.Screen name="Alert" component={AlertScreen} />
                <Stack.Screen name="TextInput" component={TextInputScreen} />
                <Stack.Screen name="PullToRefresh" component={PullToRefreshScreen} />
                <Stack.Screen name="SectionList" component={SectionListScreen} />
                <Stack.Screen name="Modal" component={ModalScreen} />
                <Stack.Screen name="InfiniteScroll" component={InfiniteScrollScreen} />
                <Stack.Screen name="Slides" component={SlidesScreen} />
                <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} />
                <Stack.Screen name="Other" component={Other} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}