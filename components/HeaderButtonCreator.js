import React from 'react'

const HeaderButtonCreator = (HeaderButton, props = {}) => ({ tintColor }) => <HeaderButton color={tintColor} {...props} />

export default HeaderButtonCreator
