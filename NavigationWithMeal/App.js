import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'

import CategoryScreens from './screens/CategoryScreens'
import FavoritesScreen from './screens/FavoritesScreen';
import MealsOverviewScreens from './screens/MealsOverviewScreens'
import MealDetailScreen from './screens/MealDetailScreen'
import { CATEGORIES, MEALS } from './data/dummy-data'
import FavouritesContextProvider from './store/context/favourites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: '#fff',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: '#fff',
      drawerActiveTintColor: '#e2b457',
      drawerActiveBackgroundColor: '#3f2f25',
    }}>
      <Drawer.Screen 
        name="MealsCategories" 
        component={CategoryScreens} 
        options={{
          title: 'Meals Categories',
          drawerIcon: (drawerConfig) => {
            return <Ionicons 
              name='restaurant' 
              size={23} 
              color={drawerConfig.color} 
            />
          }
        }}
      />
      <Drawer.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{
          drawerIcon: (drawerConfig) => {
            return <Ionicons 
              name='star' 
              size={23} 
              color={drawerConfig.color} 
            />
          }
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: '#fff',
              contentStyle: {backgroundColor: '#3f2f25'}
            }}
          >
            <Stack.Screen 
              name="Drawer" 
              component={DrawerNavigator} 
              options={{ headerShown: false}}
            />
            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreens} 
              // options={({route, navigation}) => {
              //   const catId = route.params.categoryId
              //   const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)
              //   return {
              //     title: selectedCategory.title
              //   }
              // }}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
