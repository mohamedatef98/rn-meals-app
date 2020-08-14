import React from 'react'
import { useSelector } from 'react-redux'

import { MealList } from '../components'

const Category = ({ route, navigation }) => {
    const { category } = route.params
    
    const meals = useSelector(state => state.meals.filteredMeals)

    const categoryMeals = meals.filter(meal => meal.categoryIds.includes(category.id))

    return <MealList meals={categoryMeals} onMealSelected={(meal) => navigation.navigate('MealDetails', { meal })} />
}

export default Category
