import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import { MealCard } from '../components'

import { MEALS } from '../data/dummy-data'

const Category = ({ route, navigation }) => {
    const { category } = route.params

    const meals = MEALS.filter(meal => meal.categoryIds.includes(category.id))

    return <View>
        <FlatList
            style={styles.mealList}
            data={meals}
            renderItem={({ item: meal }) => <MealCard onPress={() => navigation.navigate('MealDetails', { meal })} meal={meal} />}
        />
    </View>
}

const styles = StyleSheet.create({
    mealList: {
        margin: 10
    }
})

export default Category
