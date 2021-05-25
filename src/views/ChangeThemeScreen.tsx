import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {
    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Change Theme' />
            <TouchableOpacity 
                activeOpacity={0.8}
                style={{
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                    backgroundColor: '#5856D6',
                    justifyContent: 'center'
                }}
            >
                <Text 
                    style={{ 
                        color: 'white', 
                        textAlign: 'center',
                        fontSize: 22
                    }}
                >
                        Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    );
}
