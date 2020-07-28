import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesList = props => (
    <View>
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={({ item }) => <View style={styles.gridItem}>
                <Text>{item.title}</Text>
            </View>}
        />
    </View>
)

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesList
