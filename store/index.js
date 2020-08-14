import { createStore, combineReducers } from 'redux'
import mealReducer from './meals/reducer'

const reducer = combineReducers({
    meals: mealReducer
})

const store = createStore(reducer)

export default store
