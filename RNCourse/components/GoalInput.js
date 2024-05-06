import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Image} from "react-native";

function goalInput(params) {
  const [enteredGoal, setEnteredGoal] = useState('');

  goalInputHandler =  (enteredTeat) => {
    setEnteredGoal(enteredTeat)
  }

  addGoalHandler = () => {
    params.goalButtonHandler(enteredGoal);
    params.closeModelHandler();
    setEnteredGoal('');
  }

  return (
    <Modal visible={params.modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.imageContainer} />
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={() => params.closeModelHandler()} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default goalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'gray'
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    marginHorizontal: 4,
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 10
  }
});