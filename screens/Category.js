import React from 'react'

import { MealList } from '../components'

import { MEALS } from '../data/dummy-data'

const Category = ({ route, navigation }) => {
    const { category } = route.params

    const meals = MEALS.filter(meal => meal.categoryIds.includes(category.id))

    return <MealList meals={meals} onMealSelected={(meal) => navigation.navigate('MealDetails', { meal })} />
}

export default Category
