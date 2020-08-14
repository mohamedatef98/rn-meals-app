import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { MealList } from '../components'

const Favorites = ({ navigation }) => {
    const meals = useSelector(state => state.meals.favoriteMeals)

    return <MealList meals={meals} onMealSelected={meal => navigation.navigate('FavoriteMeal', { meal })} />
}

const styles = StyleSheet.create({})

export default Favorites
