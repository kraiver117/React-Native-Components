import React from 'react';
import { FlatList, View, Text } from 'react-native';

interface MenuItem {
    name: string;
    icon: string;
    component: string;
}

const menuItems = [
    {
        name: 'Animation 01',
        icon: 'cube-outline',
        component: 'Animation101'
    }
]

export const Home = () => {
    const renderMenuItem = (menuItem: MenuItem) => {
        return (
            <View>
                <Text>{ menuItem.name } - { menuItem.icon }</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList 
                data={ menuItems }
                renderItem={ ({ item }) => renderMenuItem(item) }
            />
        </View>
    )
}