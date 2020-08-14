import React from 'react'

import HeaderButtonBase from './HeaderButtonBase'

const FavoriteButton = ({ color }) => {
    return <HeaderButtonBase
        color={color}
        iconName='ios-star'
        onPress={() => console.log('Favorite pressed')}
    />
}

export default FavoriteButton
