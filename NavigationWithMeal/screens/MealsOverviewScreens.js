import {useLayoutEffect} from 'react'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList/MealList'

function MealsOverviewScreens(params) {
	const catId = params.route.params.categoryId

	const displayMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0
	})

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title

		params.navigation.setOptions({
			title: categoryTitle
		})
	}, [params.navigation, catId])

 	return (
		<MealList listData={displayMeals} navigation={params.navigation} />
 )   
}

export default MealsOverviewScreens