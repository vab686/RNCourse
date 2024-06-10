import { View, Text, StyleSheet } from "react-native"

import { GloablStyles } from "../constants/styles"
import Button from "./Button"

function ErrorOverlay({message, onConfirm}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred</Text>
      <Text style={styles.errorMessage}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: GloablStyles.colors.primary800
  },
  errorMessage: {
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
})

export default ErrorOverlay