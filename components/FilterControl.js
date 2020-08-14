import React from 'react'
import { Switch, View, StyleSheet, Text } from 'react-native'
import { Colors } from '../theme'

const FilterControl = ({ label, value, onFilterChange, style }) => {
    return <View style={[styles.filterContainer, style]}>
        <Text>{label}</Text>
        <Switch
            value={value}
            onValueChange={onFilterChange}
            trackColor={{ true: Colors.primary }}
        />
    </View>
}

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default FilterControl
