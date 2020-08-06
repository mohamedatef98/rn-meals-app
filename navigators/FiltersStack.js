import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Filters } from '../screens'
import { DrawerButton } from '../components'

import sharedScreenOptions from './stackSharedScreenOptions'

const Stack = createStackNavigator()

const FiltersStack = ({ navigation }) => {
    return <Stack.Navigator screenOptions={sharedScreenOptions('grey')}>
        <Stack.Screen
            component={Filters}
            name='Filters'
            options={{ 
                headerLeft: () => <DrawerButton navigation={navigation} />
            }}
        />
    </Stack.Navigator>
}

export default FiltersStack
