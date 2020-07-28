import React, { useCallback } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesList = ({ navigation }) => {

    const handleCategoryPress = (category) => navigation.navigate('Category', { category })

    return <View>
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={({ item }) => <TouchableOpacity style={styles.gridItem} onPress={() => handleCategoryPress(item)}>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>}
        />
    </View>
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesList
