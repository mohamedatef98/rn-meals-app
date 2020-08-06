import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

import MealCard from './MealCard'

const MealList = ({ meals, onMealSelected }) => {
    return <View>
    <FlatList
        style={styles.mealList}
        data={meals}
        renderItem={({ item: meal }) => <MealCard onPress={() => onMealSelected(meal)} meal={meal} />}
    />
</View>
}

const styles = StyleSheet.create({
    mealList: {
        margin: 10
    }
})

export default MealList
