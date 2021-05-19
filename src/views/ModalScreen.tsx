import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Modal Screen' />
            <Button 
                title='Open modal'
                onPress={ () => setIsVisible(true) }
            />
            <Modal
                animationType='fade'
                visible={isVisible}
                transparent
            >
                <View style={{ 
                    flex: 1, 
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    // width: 100,
                    // height:100
                }}>
                    {/* Modal Content */}
                    <View
                        style={{
                            backgroundColor: 'white'
                        }}
                    >
                        <HeaderTitle title='Modal'/>
                        <Text>Modal Body</Text>
                        <Button 
                            title='Cerrar'
                            onPress={ () => setIsVisible(false) }
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}
