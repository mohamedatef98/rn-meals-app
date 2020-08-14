import React, { useState, useEffect, useCallback, useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'

import { FilterControl, Button } from '../components'
import { Fonts, Colors } from '../theme'
import { setFilters } from '../store'

import { SaveFilters } from '../contexts'

const Filters = ({ navigation }) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetaran, setIsVegetaran] = useState(false)

    const dispatch = useDispatch()

    const [save, setSave] = useContext(SaveFilters)

    const saveFilters = useCallback(
        () => {
            dispatch(setFilters({
                isGlutenFree,
                isLactoseFree,
                isVegan,
                isVegetaran
            }))
            navigation.goBack()
        },
        [isGlutenFree, isLactoseFree, isVegan, isVegetaran, dispatch, navigation]
    )

    const resetFilters = useCallback(
        () => {
            setIsGlutenFree(false)
            setIsLactoseFree(false)
            setIsVegan(false)
            setIsVegetaran(false)
        }, []
    )

    useEffect(() => {
        setSave(() => saveFilters)
    }, [saveFilters])

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
            <View style={styles.controls}>
                <Button title='Reset' onPress={resetFilters} color={Colors.accent} />
                <Button title='Confirm' onPress={saveFilters} color={Colors.primary} />
            </View>
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
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    }
})

export default Filters
