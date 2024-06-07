import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RecentExpenses from './screens/RecentExpenses';
import ManageExpenses from './screens/ManageExpenses';
import AllExpenses from './screens/AllExpenses';
import { GloablStyles } from './constants/styles';
import IconButton from './UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={({navigation}) =>({
      headerStyle: {backgroundColor: GloablStyles.colors.primary500},
      headerTintColor: '#fff',
      tabBarStyle: {backgroundColor: GloablStyles.colors.primary500},
      tabBarActiveTintColor: GloablStyles.colors.accent500,
      headerRight: ({tintColor}) => (
        <IconButton icon='add' color={tintColor} size={24} onPress={() => {
          navigation.navigate('ManageExpenses')
        }}/>
      )
    })}
    >
      <BottomTabs.Screen 
        name="RecentExpenses" 
        component={RecentExpenses} 
        options={{ 
          title: 'Recent Expenses', 
          tabBarLabel: 'Recent', 
          tabBarIcon: ({color, size}) => <Ionicons name="hourglass" color={color} size={size} /> 
        }}
      />
      <BottomTabs.Screen 
        name="AllExpenses" 
        component={AllExpenses} 
        options={{ 
          title: 'All Expenses', 
          tabBarLabel: 'All', 
          tabBarIcon: ({color, size}) => <Ionicons name="calendar" color={color} size={size} /> 
        }}
      />
    </BottomTabs.Navigator>
  )
} 

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={
            { headerStyle: {backgroundColor: GloablStyles.colors.primary500},
              headerTintColor: '#fff'
            }
          }>
            <Stack.Screen 
              name="ExpensesOverview" 
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="ManageExpenses"
              component={ManageExpenses} 
              options={{ 
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

