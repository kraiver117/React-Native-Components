import React, { useContext, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const loadMore = () => {
        const newArray: number[] = [];

        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1000);

    }

    const renderItem = ( item: number ) => {

        return (
            <FadeInImage 
                uri={`https://picsum.photos/id/${item}/500/400`} 
                style={{
                    width: '100%',
                    height: 400
                }}
            />
        );
            // <Image 
            //     style={{
            //         width: '100%',
            //         height: 400
            //     }} 
            //     source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
            // />
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList 
                data={ numbers }
                keyExtractor={ (item) => item.toString() }
                renderItem={ ({ item }) => renderItem(item) }
                ListHeaderComponent={ <HeaderTitle title='Infinite Scroll'/> }
                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.5 }
                ListFooterComponent={ () => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size={ 30 } color={ colors.primary } />
                    </View>
                )}
            />
        </View>
    );
}