import React from 'react'
import { Platform, TouchableNativeFeedback, TouchableOpacity, Text, View, StyleSheet } from 'react-native'

import { Fonts } from '../theme'

const CategoryCard = ({ category, onPress }) => {
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return <View style={styles.container}>
        <Touchable onPress={onPress} style={styles.touchable}>
            <View style={[styles.gridItem, { backgroundColor: category.color }]}>
                <Text style={styles.text} numberOfLines={2}>{category.title}</Text>
            </View>
        </Touchable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 15,
        height: 150,
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2 }
    },
    touchable: {
        flex: 1
    },
    gridItem: {
        flex: 1,
        padding: 15,
        backgroundColor: 'red',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        fontFamily: Fonts.bold,
        textAlign: 'right'
    }
})

export default CategoryCard
