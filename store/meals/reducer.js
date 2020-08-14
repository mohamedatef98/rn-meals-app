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

        case ACTION_TYPES.setFilters:
            const filters = action.payload
            const filteredMeals = state.meals.filter(meal => {
                if (filters.isGlutenFree && !meal.isGlutenFree) return false
                if (filters.isLactoseFree && !meal.isLactoseFree) return false
                if (filters.isVegan && !meal.isVegan) return false
                if (filters.isVegetaran && !meal.isVegetarian) return false
                return true
            })

            return { ...state, filteredMeals }

        default:
            return state
    }
}

export default mealsReducer
