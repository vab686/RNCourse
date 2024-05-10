import { View, Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native'

function CategoryGridTile(params) {
	return (
		<View style={styles.gridItem}>
			<TouchableOpacity style={{flex: 1}} onPress={params.onSelect}>
				<View style={[styles.container, {backgroundColor: params.color}]}>
					<Text style={styles.title} numberOfLines={2}>{params.title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default CategoryGridTile

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150
	},
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 10,
		elevation: 5,
		padding: 10,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'right'
	}
})