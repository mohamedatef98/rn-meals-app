import { MEALS } from '../../data/dummy-data'
import { ACTION_TYPES } from './actions'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.toggleFavorite:
            const favoriteIndex = state.favoriteMeals.indexOf(action.payload)
            if (favoriteIndex !== -1) {
                const newFavoriteMeals = [...state.favoriteMeals]
                newFavoriteMeals.splice(favoriteIndex, 1)
                return { ...state, favoriteMeals: newFavoriteMeals }
            }
            else
                return { ...state, favoriteMeals: [...state.favoriteMeals, action.payload] }

        default:
            return state
    }
}

export default mealsReducer
