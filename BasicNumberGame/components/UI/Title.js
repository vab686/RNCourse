import { Text, View, StyleSheet, Platform } from "react-native";

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
		// borderWidth: Platform.OS === 'android' ? 2 : 1,
		borderWidth: Platform.select({ios: 1, android: 2}),
		borderColor: 'black',
		padding: 12,
		maxWidth: '80%',
		width: 300,
	},
})
