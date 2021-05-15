import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/flatListMenuItem-Interface';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
        >
            <View style= {styles.container }>
                <Icon 
                    name={ menuItem.icon }
                    color="blue"
                    size={ 23 }
                />
                <Text style={ styles.itemText }>
                    { menuItem.name }
                </Text>
                <View style={{ flex: 1 }} />
                <Icon 
                    name="chevron-forward-outline"
                    color="blue"
                    size={ 23 }
                    style={{ textAlign: 'right' }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 8,
        fontSize: 18
    }
});
