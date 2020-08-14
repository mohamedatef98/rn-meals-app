import React from 'react'

import HeaderButtonBase from './HeaderButtonBase'

const FiltersSaveButton = ({ onPress, color }) => {
    return <HeaderButtonBase
        color={color}
        iconName='ios-save'
        onPress={onPress}
    />
}

export default FiltersSaveButton
