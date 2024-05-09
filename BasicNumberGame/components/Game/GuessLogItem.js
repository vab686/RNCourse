import { View, Text, StyleSheet } from 'react-native';

function GuessLogItem(params) {
	return (
		<View style={styles.listItem}>
				<Text style={styles.itemText}>#{params.rounds}</Text>
				<Text style={styles.itemText}> Opponent's Guess:  {params.guess}</Text>
		</View>
	)
}

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 15,
		marginVertical: 10,
		backgroundColor: 'white',
		elevation: 5,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
		borderRadius: 30,
	}, 
	itemText: {
		fontWeight: 'bold',
		fontSize: 18,
	}
})