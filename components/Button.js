import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Touchable from './Touchable'

const Button = ({ title, onPress, style, color }) => {
    return <View style={styles.container}>
        <Touchable onPress={onPress}>
            <View style={[styles.button, { backgroundColor: color }]}>
                <Text>{title}</Text>
            </View>
        </Touchable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Button
