import {useLayoutEffect} from 'react'
import { Button, FlatList, View, StyleSheet } from 'react-native'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'

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

	const renderMealItem = (itemData) => {
		const item = itemData.item
		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		}
		return (
			<MealItem itemData={mealItemProps} navigation={params.navigation} />
		)
	}

 	return (
		<View style={styles.screen}>
			<FlatList
				data={displayMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
 )   
}

export default MealsOverviewScreens

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
	}
})