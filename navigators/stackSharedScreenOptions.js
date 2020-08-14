import { Platform } from 'react-native'

export default (customColor) => ({
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? customColor : ''
    },
    headerTitleStyle: {
        ...Platform.select({
            ios: {
                color: customColor,
                fontSize: 20
            },
            android: {
                color: 'white'
            }
        })
    },
    headerTintColor: 'white'
})
