export const ACTION_TYPES = {
    toggleFavorite: 'TOGGLE_FAVOIRTE',
    setFilters: 'SET_FILTERS'
}

export const toggleFavorite = meal => ({
    type: ACTION_TYPES.toggleFavorite,
    payload: meal
})

export const setFilters = filters => ({
    type: ACTION_TYPES.setFilters,
    payload: filters
})
