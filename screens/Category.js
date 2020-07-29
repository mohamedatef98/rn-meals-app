import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import { MEALS } from '../data/dummy-data'

const Category = ({ route }) => {
    const { category } = route.params

    const meals = MEALS.filter(meal => meal.categoryIds.includes(category.id))

    return <View>
        <FlatList
            data={meals}
            renderItem={({ item }) => <Text>{item.title}</Text>}
        />
    </View>
}

const styles = StyleSheet.create({})

export default Category
