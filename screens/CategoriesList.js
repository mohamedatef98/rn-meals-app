import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import { CategoryCard } from '../components'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesList = ({ navigation }) => {

    const handleCategoryPress = (category) => navigation.navigate('Category', { category })

    return <View>
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={({ item }) => <CategoryCard category={item} onPress={() => handleCategoryPress(item)} />}
        />
    </View>
}

const styles = StyleSheet.create({})

export default CategoriesList
