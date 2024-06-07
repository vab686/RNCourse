import { TextInput, View, StyleSheet, Text} from "react-native";

import { GloablStyles } from "../../constants/styles"

function Input({ label, textInputConfig, style, invalid }) {
  let inputStyle = [styles.input];
  if (textInputConfig.multiLine) {
    inputStyle = inputStyle.concat(styles.multiLineInput);
  }
  if (invalid) {
    inputStyle = inputStyle.concat(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.inputLabel, invalid && styles.invalidLable]}>{label}</Text>
      <TextInput  
        style={inputStyle}
        {...textInputConfig}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    marginBottom: 20,
    color: GloablStyles.colors.primary700,
    backgroundColor: GloablStyles.colors.primary100,
    fontSize: 16,
    padding: 8,
    width: '100%',
  },
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
  inputLabel: {
    fontSize: 16,
    color: GloablStyles.colors.primary200,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  multiLineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLable: {
    color: GloablStyles.colors.error500,
  },
  invalidInput: {
    borderColor: GloablStyles.colors.error50,
    borderWidth: 1,
  }
})

export default Input;