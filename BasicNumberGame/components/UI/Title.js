import { Text, View, StyleSheet } from "react-native";

function Title(params) {
	return <Text style={styles.title}>{params.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 10,
		textAlign: 'center',
		borderWidth: 1,
		borderColor: 'black',
		padding: 12,
	},
})
