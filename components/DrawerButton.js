import React from 'react'

import HeaderButton from './HeaderButton'

const DrawerButton = ({ navigation }) => {
    return <HeaderButton
        iconName='ios-menu'
        onPress={() => navigation.openDrawer()}
    />
}

export default DrawerButton
