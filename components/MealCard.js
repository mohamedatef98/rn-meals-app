import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { Fonts } from '../theme'

const MealCard = ({ meal, onPress }) => {
    return <View style={styles.menuItem}>
        <TouchableOpacity onPress={onPress} style={styles.menuTouchableItem}>
            <View style={styles.mealContainer}>
                <View style={styles.imageContainer}>
                    <ImageBackground style={styles.mealImage} source={{ uri: meal.imageUrl }}>
                        <View style={styles.mealTitleContainer}>
                            <Text style={styles.mealTitle} numberOfLines={1}>{meal.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.mealDetailsContainer}>
                    <Text style={styles.mealDetail}>{meal.duration}m</Text>
                    <Text style={styles.mealDetail}>{meal.complexity.toUpperCase()}</Text>
                    <Text style={styles.mealDetail}>{meal.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    menuItem: {
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10
    },
    menuTouchableItem: {
        flex: 1
    },
    mealContainer: {
        flex: 1
    },
    imageContainer: {
        height: '85%'
    },
    mealImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealTitleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center'
    },
    mealTitle: {
        fontSize: 20,
        fontFamily: Fonts.bold,
        color: 'white'
    },
    mealDetailsContainer: {
        height: '15%',
        backgroundColor: '#cecece',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mealDetail: {
        fontFamily: Fonts.bold
    }
})

export default MealCard
