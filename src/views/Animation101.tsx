import React from 'react';
import { StyleSheet, View, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101 = () => {
    const { opacity, position, fadeIn, fadeOut, startMovingPostion } = useAnimation();

    return (
        <View style= { styles.container }>
            <Animated.View style={{
                ...styles.purpleBox,
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
            />
            <Button 
                title="FadeOut"
                onPress={ fadeOut }
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
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});
