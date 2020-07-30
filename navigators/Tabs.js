import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'

import StackNavigator from './Stack'
import { Favorites } from '../screens'
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
            component={StackNavigator}
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='ios-restaurant' size={size} color={color} />,
                tabBarColor: Colors.primary
            }}
        />
        <Tabs.Screen
            name='Favorites'
            component={Favorites}
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='ios-star' size={size} color={color} />,
                tabBarColor: Colors.accent
            }}
        />
    </Tabs.Navigator>
}

export default TabsNavigator
