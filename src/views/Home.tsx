import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <Icon 
                name="star-outline"
                size= { 50 }
                color="black"
            />
        </View>
    )
}
