import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'

import { Favorites, MealDetails } from '../screens'
import { DrawerButton, HeaderButtonCreator, HeaderButtonBase } from '../components'
import { Colors } from '../theme'

import sharedScreenOptions from './stackSharedScreenOptions'
import { toggleFavorite } from '../store'

const Stack = createStackNavigator()

const FavoritesStack = ({ navigation }) => {
    const dispatch = useDispatch()
    const favMeals = useSelector(state => state.meals.favoriteMeals)

    return <Stack.Navigator screenOptions={sharedScreenOptions(Colors.accent)}>
        <Stack.Screen
            component={Favorites}
            name='Your Favorites'
            options={{
                headerLeft: HeaderButtonCreator(DrawerButton, { navigation })
            }}
        />
        <Stack.Screen
            component={MealDetails}
            name={'FavoriteMeal'}
            options={({ route }) => ({
                title: route?.params?.meal?.title,
                headerRight: HeaderButtonCreator(HeaderButtonBase, {
                    onPress: () => dispatch(toggleFavorite(route?.params?.meal)),
                    iconName: favMeals.includes(route?.params?.meal) ? 'ios-star' : 'ios-star-outline' 
                })
            })}
        />
    </Stack.Navigator>
}

export default FavoritesStack
