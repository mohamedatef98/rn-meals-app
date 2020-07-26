import React, { useState, useCallback } from 'react'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { loadAsync } from 'expo-font'

import { CategoriesList, Category, MealDetails } from './screens'
import { FontsPaths } from './theme'

const loadFonts = () => loadAsync(FontsPaths)

const Stack = createStackNavigator()

const App = props => {
    const [isLoading, setIsLoading] = useState(true)

    const handleOnLoadingSuccess = useCallback(
        () => setIsLoading(false),
        []
    )

    const handleOnLoadingError = useCallback(
        err => console.error(err),
        []
    )

    return isLoading ?
        <AppLoading
            startAsync={() => Promise.all([loadFonts()])}
            onFinish={handleOnLoadingSuccess}
            onError={handleOnLoadingError}
        /> :
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CategoriesList" component={CategoriesList} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="MealDetails" component={MealDetails} />
            </Stack.Navigator>
        </NavigationContainer>
}

export default App
