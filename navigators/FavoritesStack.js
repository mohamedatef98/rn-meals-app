import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Favorites, MealDetails } from '../screens'
import { Colors } from '../theme'

import sharedScreenOptions from './stackSharedScreenOptions'

const Stack = createStackNavigator()

const FavoritesStack = props => {
    return <Stack.Navigator screenOptions={sharedScreenOptions(Colors.accent)}>
        <Stack.Screen component={Favorites} name='Your Favorites' />
        <Stack.Screen
            component={MealDetails}
            name={'FavoriteMeal'}
            options={({ route }) => ({ title: route?.params?.meal.title })} />
    </Stack.Navigator>
}

export default FavoritesStack
