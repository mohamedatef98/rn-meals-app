import React, { useState, useCallback } from 'react'
import { Platform } from 'react-native'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'

import { loadAsync } from 'expo-font'

import { CategoriesList, Category, MealDetails } from './screens'
import { FontsPaths, Colors } from './theme'

enableScreens()

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
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                    },
                    headerTitleStyle: {
                        ...Platform.select({
                            ios: {
                                color: Colors.primary,
                                fontSize: 20
                            },
                            android: {
                                color: 'white'
                            }
                        })
                    }
                }}
            >
                <Stack.Screen
                    name='CategoriesList'
                    options={{ title: 'Categories' }}
                    component={CategoriesList}
                />
                <Stack.Screen
                    name='Category'
                    options={({ route }) => ({ title: route?.params?.category?.title })}
                    component={Category}
                />
                <Stack.Screen
                    name='MealDetails'
                    component={MealDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
}

export default App
