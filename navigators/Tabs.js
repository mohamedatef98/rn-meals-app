import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'

import CategoriesStackNavigator from './CategoriesStack'
import FavoritesStackNavigator from './FavoritesStack'
import { Colors } from '../theme'

const Tabs = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()

const TabsNavigator = props => {
    return <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: Colors.accent
            }}
            {...Platform.select({
                ios: {},
                android: {
                    shifting: true
                }
            })}
        >
        <Tabs.Screen
            name='Meals'
            component={CategoriesStackNavigator}
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='ios-restaurant' size={size} color={color} />,
                tabBarColor: Colors.primary
            }}
        />
        <Tabs.Screen
            name='Favorites'
            component={FavoritesStackNavigator}
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='ios-star' size={size} color={color} />,
                tabBarColor: Colors.accent
            }}
        />
    </Tabs.Navigator>
}

export default TabsNavigator
