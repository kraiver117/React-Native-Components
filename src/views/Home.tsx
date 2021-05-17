import React from 'react';
import { FlatList, View } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { styles } from '../theme/appTheme';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

export const Home = () => {
    const itemSeparator = () => {
        return (
            <View 
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8,
                    borderColor: '#5856D6'
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
                ListHeaderComponent={ () => <HeaderTitle title='Opciones de menú' /> }
                ItemSeparatorComponent={ itemSeparator }
            />
        </View>
    )
}