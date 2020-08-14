import React from 'react'

import HeaderButtonBase from './HeaderButtonBase'

const FavoriteButton = ({ color, onPress }) => {
    return <HeaderButtonBase
        color={color}
        iconName='ios-star'
        onPress={onPress}
    />
}

export default FavoriteButton
