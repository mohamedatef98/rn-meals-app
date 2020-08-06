import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TabsNavigator from './Tabs'
import FiltersStackNavigator from './FiltersStack'


const Drawer = createDrawerNavigator()

const DrawerNavigator = props => (
    <Drawer.Navigator>
        <Drawer.Screen name='Meals' component={TabsNavigator} />
        <Drawer.Screen name='Filters' component={FiltersStackNavigator} />
    </Drawer.Navigator>
)

export default DrawerNavigator
