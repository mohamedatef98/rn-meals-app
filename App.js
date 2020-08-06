import React, { useState, useCallback } from 'react'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'

import { loadAsync } from 'expo-font'

import MainNavigator from './navigators'
import { FontsPaths } from './theme'

enableScreens()

const loadFonts = () => loadAsync(FontsPaths)

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
            <MainNavigator />
        </NavigationContainer>
}

export default App
