export const ACTION_TYPES = {
    toggleFavorite: 'TOGGLE_FAVOIRTE'
}

export const toggleFavorite = meal => ({
    type: ACTION_TYPES.toggleFavorite,
    payload: meal
})
