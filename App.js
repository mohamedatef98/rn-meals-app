import React, { useState, useCallback } from 'react'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'

import { loadAsync } from 'expo-font'

import TabsNavigator from './navigators/Tabs'
import { FontsPaths } from './theme'

enableScreens()

const loadFonts = () => loadAsync(FontsPaths)

const Tabs = createBottomTabNavigator()

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
            <TabsNavigator />
        </NavigationContainer>
}

export default App
