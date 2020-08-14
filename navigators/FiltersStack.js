import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Filters } from '../screens'
import { DrawerButton, FiltersSaveButton, HeaderButtonCreator } from '../components'
import { SaveFilters } from '../contexts'

import sharedScreenOptions from './stackSharedScreenOptions'

const Stack = createStackNavigator()

const FiltersStack = ({ navigation }) => {

    const [save, setSave] = useState(() => function initSave () {})

    return <SaveFilters.Provider value={[save, setSave]}>
        <Stack.Navigator screenOptions={sharedScreenOptions('grey')}>
            <Stack.Screen
                component={Filters}
                name='Filters'
                options={({ route, navigation }) => ({
                    headerLeft: HeaderButtonCreator(DrawerButton, { navigation }),
                    headerRight: HeaderButtonCreator(FiltersSaveButton, {
                        onPress: () => {
                            save()
                        }
                    })
                })}
            />
        </Stack.Navigator>
    </SaveFilters.Provider>
}

export default FiltersStack
