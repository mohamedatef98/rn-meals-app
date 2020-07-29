import React from 'react'
import { Platform, TouchableNativeFeedback, TouchableOpacity, Text, View, StyleSheet } from 'react-native'

import { Fonts } from '../theme'

const CategoryCard = ({ category, onPress }) => {
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return <View style={styles.categoryContainer}>
        <Touchable onPress={onPress} style={styles.touchable}>
            <View style={[styles.gridItem, { backgroundColor: category.color }]}>
                <Text style={styles.text} numberOfLines={2}>{category.title}</Text>
            </View>
        </Touchable>
    </View>
}

const styles = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        height: 150,
        margin: 15,
        borderRadius: 10,
        overflow: 'hidden'
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
