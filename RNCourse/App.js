import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, SafeAreaView} from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  goalButtonHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  }

  deleteGoalHandler = (goalIndex) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal, index) => index !== goalIndex);
    });
  }

  openModalHandler = () => {
    setModalVisible(true);
  }

  closeModelHandler = () => {
    setModalVisible(false);
  }

  return (
    <>
    <StatusBar style='auto' /> 
    <SafeAreaView style={styles.container}>
      <Button title="Add Goal" onPress={openModalHandler} />
      { modalVisible && 
        <GoalInput 
          modalVisible={modalVisible} 
          goalButtonHandler={goalButtonHandler} 
          closeModelHandler={closeModelHandler}
        />
      }
      <View style={styles.goalsContaner}>
        <FlatList 
          keyExtractor={(item, index) => index.toString()}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem title={itemData} deleteGoalHandler={deleteGoalHandler}/>
          )} />
      </View>
    </SafeAreaView>
    </>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 50,
    marginHorizontal: 16,
    marginTop: 50,
  },
  goalsContaner: {
    flex: 5
  }
});
