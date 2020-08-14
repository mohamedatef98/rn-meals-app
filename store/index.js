import { createStore, combineReducers } from 'redux'
import mealReducer from './meals/reducer'
import { toggleFavorite } from './meals/actions'

const reducer = combineReducers({
    meals: mealReducer
})

const store = createStore(reducer)

export default store
export {
    toggleFavorite
}
