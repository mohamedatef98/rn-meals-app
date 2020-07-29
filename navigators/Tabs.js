import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import StackNavigator from './Stack'
import { Favorites } from '../screens'
import { Colors } from '../theme'

const Tabs = createBottomTabNavigator()

const TabsNavigator = props => {
    return <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: Colors.accent
            }}
        >
        <Tabs.Screen
            name='Meals'
            component={StackNavigator}
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='ios-restaurant' size={size} color={color} />
            }}
        />
        <Tabs.Screen
            name='Favorites'
            component={Favorites}
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='ios-star' size={size} color={color} />
            }}
        />
    </Tabs.Navigator>
}

export default TabsNavigator
