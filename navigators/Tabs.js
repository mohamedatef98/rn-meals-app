import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import StackNavigator from './Stack'
import { Favorites } from '../screens'

const Tabs = createBottomTabNavigator()

const TabsNavigator = props => {
    return <Tabs.Navigator>
        <Tabs.Screen
            name='Meals'
            component={StackNavigator}
        />
        <Tabs.Screen
            name='Favorites'
            component={Favorites}
        />
    </Tabs.Navigator>
}

export default TabsNavigator
