import React from 'react';
import { Button, View, Alert } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert(
            "Título",
            "Mensaje de la alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismiss')
            }
        );
    }

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Alerts' />
            <Button 
                title='Mostrar Alerta'
                onPress={ showAlert }
            />
        </View>
    )
}
