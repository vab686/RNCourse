import { View, Text, StyleSheet } from 'react-native'

function MealDetails(params) {
	return (
		<View style={[styles.details, params.style]}>
			<Text style={[styles.detailsText, params.textStyle]}>{params.itemData.duration}m</Text>
			<Text style={[styles.detailsText, params.textStyle]}>{params.itemData.complexity.toUpperCase()}</Text>
			<Text style={[styles.detailsText, params.textStyle]}>{params.itemData.affordability.toUpperCase()}</Text>
		</View>
	)
}

export default MealDetails

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10
	},
	detailsText: {
		fontSize: 16,
		marginHorizontal: 4,
	},
})