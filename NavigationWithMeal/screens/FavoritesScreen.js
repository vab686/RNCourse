import { View, Text, Button, StyleSheet } from 'react-native'

function FavoritesScreen(params) {
  return (
    <View style={styles.screen}>
      <Text>Favorites Screen</Text>
      <Button title="Go to Details" onPress={() => params.navigation.navigate('MealDetails')} />
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})