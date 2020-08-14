import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Filters } from '../screens'
import { DrawerButton, FiltersSaveButton, HeaderButtonCreator } from '../components'

import sharedScreenOptions from './stackSharedScreenOptions'

const Stack = createStackNavigator()

const FiltersStack = ({ navigation }) => {
    return <Stack.Navigator screenOptions={sharedScreenOptions('grey')}>
        <Stack.Screen
            component={Filters}
            name='Filters'
            options={{ 
                headerLeft: ({ tintColor }) => <DrawerButton navigation={navigation} color={tintColor} />,
                headerRight: HeaderButtonCreator(FiltersSaveButton, { onPress: () => console.log('save filters') })
            }}
        />
    </Stack.Navigator>
}

export default FiltersStack
