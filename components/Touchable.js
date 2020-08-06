import React from 'react'
import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native'

const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

const Touchable = ({ children, ...rest }) => {
    return <TouchableComponent {...rest}>
        {children}
    </TouchableComponent>
}

export default Touchable
