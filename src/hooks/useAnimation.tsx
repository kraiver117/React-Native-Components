import { useRef } from "react";
import { Animated } from "react-native";

export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }
        ).start( () => console.log('Animacion termino') );
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    const startMovingPostion = ( initPosition: number, duration: number = 500, easing?: any) => {
        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                easing
            }
        ).start();
    }


    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPostion
    }
}
