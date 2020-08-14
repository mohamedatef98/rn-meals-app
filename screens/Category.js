import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import { MealList } from '../components'
import { Fonts } from '../theme'

const Category = ({ route, navigation }) => {
    const { category } = route.params

    const meals = useSelector(state => state.meals.filteredMeals)

    const categoryMeals = meals.filter(meal => meal.categoryIds.includes(category.id))

    if (categoryMeals.length < 1)
        return <View style={styles.screen}>
            <Text style={styles.text}>No meals found.</Text>
            <Text style={styles.text}>Maybe check your filters?</Text>
        </View>

    return <MealList meals={categoryMeals} onMealSelected={(meal) => navigation.navigate('MealDetails', { meal })} />
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontFamily: Fonts.bold
    }
})

export default Category
