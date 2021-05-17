import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

export const SwitchScreeen = () => {
    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: false
    });

    const { isActive, isHungry, isHappy } = state;

    const onChange = ( value: boolean, field: string) => {
        setstate({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title='Switches' />
            <View style={ styles.switchRow }>
                <Text style={ styles.switchText }>is Active</Text>
                <CustomSwitch isOn={ isActive } onChange={ (value) => onChange( value, 'isActive' ) } />
            </View>
            <Text style={ styles.switchText }>
                { JSON.stringify(state, null, 5) }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});