import  { View, Text, StyleSheet } from 'react-native';

function Subtitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subTitle: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#e2b457',
	},
	subTitleContainer: {
		margin: 8,
		padding: 6,
		marginHorizontal: 20,
		marginVertical: 10,
		borderBottomColor: '#e2b457',
		borderBottomWidth: 2
	}
})