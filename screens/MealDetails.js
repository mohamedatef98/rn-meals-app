import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MealDetails = ({ route }) => {
    const { meal } = route.params
    return <View>
        <Text>The MealDetails Screen: {meal.title}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default MealDetails
