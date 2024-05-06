// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View>
        <Text>Hiiiiiiii</Text>
      </View>
      <Text style={styles.dummyText} >Hello World!</Text>
      <Button title="Click Me" onPress={() => alert('Button Clicked')} /> */}
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Goal..." style={styles.testInput}/>
        <Button title="Add Goal" onPress={() => alert('Button Clicked')} />
      </View>
      <View>
        <Text>Goal List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  testInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginRight: 20,
  },
  dummyText: {
    color: 'red',
    fontSize: 20,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'blue',
  }
});
