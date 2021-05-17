import React, { useState } from 'react';
import { View, Switch, Platform } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreeen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title='Switches' />
            <Switch
                trackColor={{ false: "#D9D9DB", true: "green" }}
                thumbColor={(Platform.OS === 'android') ? 'white' : ''}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}