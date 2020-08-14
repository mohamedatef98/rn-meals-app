import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { MealList } from '../components'
import { Fonts } from '../theme'

const Favorites = ({ navigation }) => {
    const meals = useSelector(state => state.meals.favoriteMeals)

    if (meals.length < 1)
        return <View style={styles.screen}>
            <Text style={styles.text}>No favorite meals found.</Text>
            <Text style={styles.text}>Start adding some!</Text>
        </View>

    return <MealList meals={meals} onMealSelected={meal => navigation.navigate('FavoriteMeal', { meal })} />
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: Fonts.bold,
        fontSize: 15
    }
})

export default Favorites
