import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Keyboard, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {
    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    console.log(isSubscribed);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                {/* Issues with radio button */}
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                    <View style={ styles.globalMargin }>
                        <HeaderTitle title='Text Input' />
                        <TextInput 
                            style={ stylesScreen.textInputStyle }
                            placeholder="Ingrese su nombre"
                            autoCorrect={ false }
                            autoCapitalize="words"
                            onChangeText={ (value) => onChange(value, 'name') }
                        />
                        <TextInput 
                            style={ stylesScreen.textInputStyle }
                            placeholder="Ingrese su email"
                            autoCorrect={ false }
                            autoCapitalize="none"
                            onChangeText={ (value) => onChange(value, 'email') }
                            keyboardType='email-address'
                        />
                        <View style={ stylesScreen.switchRow }>
                            <Text style={ stylesScreen.switchText }>Subscribed</Text>
                            <CustomSwitch isOn={ isSubscribed } onChange={ (value) => onChange( value, 'isSubscribed' ) } />
                        </View>
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <TextInput 
                            style={ stylesScreen.textInputStyle }
                            placeholder="Ingrese su teléfono"
                            autoCorrect={ false }
                            onChangeText={ (value) => onChange(value, 'phone') }
                            keyboardType='phone-pad'
                        />
                        <View style={{ height: 100 }} />
                    </View>
                {/* </TouchableWithoutFeedback> */}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        height: 50,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    }
});