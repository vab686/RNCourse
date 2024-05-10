import { View, Text, Button, StyleSheet , FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

function CategoryScreens(params) {
	
	const rendorCategoryItem = (itemData) => {
		const pressHandler = () => {
			params.navigation.navigate('MealsOverview', {
				categoryId: itemData.item.id
			})
		}
		return (
			<CategoryGridTile 
				title={itemData.item.title} 
				color={itemData.item.color}
				onSelect={pressHandler}
			/>
		)
	}

	return ( 
		<FlatList 
			data={CATEGORIES} 
			renderItem={rendorCategoryItem} 
			keyExtractor={(item) => item.id}
			numColumns={2}
		/>
	)
}

export default CategoryScreens

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})