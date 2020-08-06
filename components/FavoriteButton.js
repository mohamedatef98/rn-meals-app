import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Touchable from './Touchable'

const FavoriteButton = (props) => {
    return <View style={styles.container}>
        <Touchable onPress={() => console.log('dffdfff')}>
            <View style={styles.icon}>
                <Ionicons name='ios-star' size={30} color={Platform.OS === 'ios' ? 'black' : 'white'} />
            </View>
        </Touchable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
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

export default FavoriteButton
