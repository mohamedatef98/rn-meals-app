import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Touchable from './Touchable'

const HeaderButtonBase = ({ iconName, onPress, color }) => {
    return <View style={styles.container}>
        <Touchable onPress={onPress}>
            <View style={styles.icon}>
                <Ionicons name={iconName} size={30} color={color} />
            </View>
        </Touchable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 7,
        borderRadius: 20,
        overflow: 'hidden'
    },
    icon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HeaderButtonBase
