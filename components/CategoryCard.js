import React from 'react'
import { Platform, TouchableNativeFeedback, TouchableOpacity, Text, View, StyleSheet } from 'react-native'

import { Fonts } from '../theme'

const CategoryCard = ({ category, onPress }) => {
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return <View style={styles.container}>
        <View style={styles.categoryContainer}>
            <Touchable onPress={onPress} style={styles.touchable}>
                <View style={[styles.gridItem, { backgroundColor: category.color }]}>
                    <Text style={styles.text} numberOfLines={2}>{category.title}</Text>
                </View>
            </Touchable>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        margin: 15,
        borderRadius: 10,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 8
    },
    categoryContainer: {
        overflow: 'hidden',
        borderRadius: 10,
        flex: 1
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
