import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { styles } from '../theme/appTheme';
import { menuItems } from '../data/menuItems';

export const Home = () => {
    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom:20 }}>
                <Text style={ styles.title }>Menu Options</Text>
            </View>
        )
    }

    const itemSeparator = () => {
        return (
            <View 
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8
                }}
            />
        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList 
                data={ menuItems }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } /> }
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ renderListHeader }
                ItemSeparatorComponent={ itemSeparator }
            />
        </View>
    )
}