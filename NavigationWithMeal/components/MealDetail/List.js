import  { View, Text, StyleSheet } from 'react-native';

function List(params) {
  return params.data.map((ingredient, index) => (
    <View key={`${ingredient}-${index}`} style={styles.listItems}> 
      <Text style={styles.itemText}>{ingredient}</Text>
    </View>
  ))
}

export default List

const styles = StyleSheet.create({
  listItems: {
    marginHorizontal: 15,
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#e2b457',
    borderRadius: 10,
  },
  itemText: {
    textAlign: 'center',
    color: '#351401',
  },
})