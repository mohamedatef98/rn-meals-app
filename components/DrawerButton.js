import React from 'react'

import HeaderButtonBase from './HeaderButtonBase'

const DrawerButton = ({ navigation, color }) => {
    return <HeaderButtonBase
        color={color}
        iconName='ios-menu'
        onPress={() => navigation.openDrawer()}
    />
}

export default DrawerButton
