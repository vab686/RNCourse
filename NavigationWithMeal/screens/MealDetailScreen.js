import {useLayoutEffect} from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native'

import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import List from '../components/MealDetail/List'
import Subtitle from '../components/MealDetail/Subtitle'
import IconButton from '../components/IconButton'

function MealDetailScreen(params) {
	const mealId = params.route.params.mealId

	const selectedMeal = MEALS.find((meal) => meal.id === mealId)

	const headerButtonPressed = () => {
		console.log('Header button pressed')
	}

	useLayoutEffect(() => {
		params.navigation.setOptions({
			title: selectedMeal.title,
			headerRight: () => (
				<IconButton icon="star" color="white" onPress={headerButtonPressed} />
			)
		})
	}, [params.navigation, headerButtonPressed])

	return (
		<ScrollView style={styles.screen}>
			<Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
			<Text style={styles.title}>{ selectedMeal.title }</Text>
			<MealDetails itemData={selectedMeal} textStyle={styles.detailText} />
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	)
}

export default MealDetailScreen

const styles = StyleSheet.create({
	screen: {
		marginBottom: 32
	},
	image: {
		width: '100%',
		height: 350
	},
	title: {
		fontSize: 22,
		textAlign: 'center',
		margin: 8,
		fontWeight: 'bold',
		color: 'white',
	},
	detailText: {
		fontSize: 16,
		marginHorizontal: 4,
		color: 'white'
	},
	listContainer: {
		width: '80%'
	},
	listOuterContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	}
})