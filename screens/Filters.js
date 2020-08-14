import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { FilterControl } from '../components'
import { Fonts } from '../theme'

const Filters = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetaran, setIsVegetaran] = useState(false)

    return <View style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.title}>Filters</Text>
            <FilterControl
                label='Gluten-Free'
                value={isGlutenFree}
                onFilterChange={setIsGlutenFree}
                style={styles.filter}
            />
            <FilterControl
                label='Lactose-Free'
                value={isLactoseFree}
                onFilterChange={setIsLactoseFree}
                style={styles.filter}
            />
            <FilterControl
                label='Vegan'
                value={isVegan}
                onFilterChange={setIsVegan}
                style={styles.filter}
            />
            <FilterControl
                label='Vegetaran'
                value={isVegetaran}
                onFilterChange={setIsVegetaran}
                style={styles.filter}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    container: {
        width: '80%'
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 22,
        textAlign: 'center'
    },
    filter: {
        marginTop: 10
    }
})

export default Filters
