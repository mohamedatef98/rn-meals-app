import React from 'react'

import HeaderButtonBase from './HeaderButtonBase'

const FiltersSaveButton = ({ onPress }) => {
    return <HeaderButtonBase
        iconName='ios-save'
        onPress={onPress}
    />
}

export default FiltersSaveButton
