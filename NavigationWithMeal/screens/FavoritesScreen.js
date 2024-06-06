import { useContext } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { FavouritesContext } from '../store/context/favourites-context'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList/MealList'

function FavoritesScreen(params) {
  const favouriteMealsCtx = useContext(FavouritesContext)

  const favouriteMeals = MEALS.filter((meal) => favouriteMealsCtx.ids.includes(meal.id))

  if (favouriteMeals.length === 0 || !favouriteMeals) {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>No favourite meals found. Start adding some!</Text>
      </View>
    )
  }

  return (
    <MealList listData={favouriteMeals} navigation={params.navigation} />
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'white'
  }
})