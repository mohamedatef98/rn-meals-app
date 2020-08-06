import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Filters } from '../screens'

import sharedScreenOptions from './stackSharedScreenOptions'

const Stack = createStackNavigator()

const FiltersStack = props => {
    return <Stack.Navigator screenOptions={sharedScreenOptions('black')}>
        <Stack.Screen component={Filters} name='Filters' />
    </Stack.Navigator>
}

export default FiltersStack
