import { View, StyleSheet, Pressable, Image, Text, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MealDetails from './MealDetails'

function MealItem(params) {
	const navigation = useNavigation()

	const selectedMealHandler = () => {
		navigation.navigate('MealDetail', {
			mealId: params.itemData.id
		})
	}

	return (
		<View style={styles.screen}>
			<Pressable 
				android_ripple={{color: '#ccc'}} 
				style={({pressed}) => pressed ? styles.buttonPressed : null}
				title={params.itemData.title} 
				onPress={selectedMealHandler} 
			>
				<View>
					<Image source={{uri: params.itemData.imageUrl}} style={styles.image}/>
					<Text style={styles.title}>{params.itemData.title}</Text>
				</View>
				<MealDetails itemData={params.itemData} />
			</Pressable>
		</View>
	)
}

export default MealItem

const styles = StyleSheet.create({
	screen: {
		margin: 16,
		borderRadius: 10,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		backgroundColor: '#f5f5f5',
		elevation: 5,
		shadowColor: 'black',
		shadowOpacity: 0.35,
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 10,
	},
	image: {
		width: '100%',
		height: 200
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 8
	},
	buttonPressed: {
		backgroundColor: '#ccc',
		opacity: 0.5
	}
})