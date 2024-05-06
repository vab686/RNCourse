import { View, Text, StyleSheet, Pressable } from 'react-native';

function goalItem(params) {

	deleteGoalHandler = (index) => {
		params.deleteGoalHandler(index);
	}
	return (
		<View style={styles.goalItem}>
			<Pressable 
				android_ripple={{color: 'gray'}} 
				onPress={() => deleteGoalHandler(params.title.index)}
				style={({pressed}) => pressed && styles.pressedItem } // for IOS
			>
				<Text style={{padding: 8}}>{params.title.item}</Text>
			</Pressable>
		</View>
	);
}

export default goalItem;

const styles = StyleSheet.create({
	goalItem: {
		// padding: 8,
		margin: 8,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 4
	}, 
	pressedItem: {
		backgroundColor: 'blue',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 4,
		opacity: 0.5
	}
});