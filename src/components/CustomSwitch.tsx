import React, { useState } from 'react';
import { Switch, Platform } from 'react-native';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange( !isEnabled );
    };

    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: "green" }}
            thumbColor={(Platform.OS === 'android') ? 'white' : ''}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
