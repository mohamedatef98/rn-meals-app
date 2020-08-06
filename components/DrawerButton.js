import React from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Touchable from './Touchable'

const DrawerButton = ({ navigation }) => {
    return <View style={styles.container}>
        <Touchable onPress={() => navigation.openDrawer()} activeOpacity={0.8}>
            <View style={styles.icon}>
                <Ionicons name='ios-menu' size={30} color={Platform.OS === 'ios' ? 'black' : 'white'} />
            </View>
        </Touchable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    icon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DrawerButton
