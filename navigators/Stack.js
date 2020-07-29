import React from 'react'
import { Platform, TouchableOpacity, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'

import { CategoriesList, MealDetails, Category } from '../screens'
import { Colors } from '../theme'

const Stack = createStackNavigator()

const StackNavigator = props => {
    return <Stack.Navigator
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
            options={({ route }) => ({
                title: route?.params?.meal?.title,
                headerRight: () => <TouchableOpacity
                    style={styles.favoriteHeaderButton}
                    onPress={() => console.log('ddfdfd')}
                >
                    <Ionicons name="ios-star" size={25} />
                </TouchableOpacity>
            })}
            component={MealDetails}
        />
    </Stack.Navigator>
}

const styles = StyleSheet.create({
    favoriteHeaderButton: {
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default StackNavigator
