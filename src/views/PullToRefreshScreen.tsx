import React, { useState } from 'react';
import { ScrollView, View, RefreshControl, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
    const { top } = useSafeAreaInsets();
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola mundo!');
        }, 3000);
    }

    return (
        // <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                style={{
                    marginTop: refreshing ? top : 0
                }}
                refreshControl={
                    <RefreshControl 
                        refreshing={ refreshing }
                        onRefresh={ onRefresh }
                        progressViewOffset={ 10 }
                        progressBackgroundColor="#5856D6"
                        colors={['white', 'red', 'orange']}
                        //Style and tintColor just work for iOS
                        // style={{ backgroundColor: '#5856D6' }}
                        // tintColor='red'
                    />
                }
            >
                <View style={ styles.globalMargin }>
                    <HeaderTitle title='Pull to Refresh' />
                    {
                        data && <HeaderTitle title={ data } />
                    }
                </View>
            </ScrollView>
        // </SafeAreaView>
    );
}
