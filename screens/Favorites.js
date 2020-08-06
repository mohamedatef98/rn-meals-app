import React from 'react'
import { StyleSheet } from 'react-native'

import { MealList } from '../components'
import { MEALS } from '../data/dummy-data'

const Favorites = ({ navigation }) => {
    const meals = MEALS.filter(meal => /m[16]/.test(meal.id))
    return <MealList meals={meals} onMealSelected={meal => navigation.navigate('FavoriteMeal', { meal })} />
}

const styles = StyleSheet.create({})

export default Favorites
