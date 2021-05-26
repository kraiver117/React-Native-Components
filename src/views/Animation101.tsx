import React, { useContext } from 'react';
import { StyleSheet, View, Animated, Button, Easing } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101 = () => {
    const { opacity, position, fadeIn, fadeOut, startMovingPostion } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style= { styles.container }>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                marginBottom: 20,
                opacity,
                transform: [{
                    translateY: position
                }]
            }} />
            <Button 
                title="FadeIn"
                onPress={ () => {
                    fadeIn();
                    startMovingPostion(-100, 1000, Easing.bounce);
                }}
                color={ colors.primary }
            />
            <Button 
                title="FadeOut"
                onPress={ fadeOut }
                color={ colors.primary }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150
    }
});
