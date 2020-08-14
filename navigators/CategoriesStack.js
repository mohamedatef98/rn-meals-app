import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'

import { CategoriesList, MealDetails, Category } from '../screens'
import { DrawerButton, HeaderButtonBase, HeaderButtonCreator } from '../components'
import { Colors } from '../theme'

import sharedScreenOptions from './stackSharedScreenOptions'
import { toggleFavorite } from '../store'

const Stack = createStackNavigator()

const StackNavigator = ({ navigation }) => {
    const dispatch = useDispatch()
    const favMeals = useSelector(state => state.meals.favoriteMeals)

    return <Stack.Navigator screenOptions={sharedScreenOptions(Colors.primary)}>
        <Stack.Screen
            name='CategoriesList'
            options={{
                title: 'Categories',
                headerLeft: HeaderButtonCreator(DrawerButton, { navigation })
            }}
            component={CategoriesList}
        />
        <Stack.Screen
            name='Category'
            options={({ route }) => ({ title: route?.params?.category?.title })}
            component={Category}
        />
        <Stack.Screen
            name='MealDetails'
            options={({ route }) => ({
                title: route?.params?.meal?.title,
                headerRight: HeaderButtonCreator(HeaderButtonBase, {
                    onPress: () => dispatch(toggleFavorite(route?.params?.meal)),
                    iconName: favMeals.includes(route?.params?.meal) ? 'ios-star' : 'ios-star-outline' 
                })
            })}
            component={MealDetails}
        />
    </Stack.Navigator>
}

const styles = StyleSheet.create({
    favoriteHeaderButton: {
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default StackNavigator
