import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import Button from "../../UI/Button";
import { GloablStyles } from "../../constants/styles";

function ExpensesForm({isEditing, onCancel, onSubmit, initialData}) {
  const [inputValues, setInputs] = useState({
    amount: {
      value: initialData ? initialData.amount.toString() : '',
      isValid: !!initialData
    },
    date: {
      value: initialData ? new Date(initialData.date).toISOString().slice(0, 10) : '',
      isValid: !!initialData
    },
    description: {
      value: initialData ? initialData.description : '',
      isValid: !!initialData
    }
  })

  const handleInputChange = (inputIdentifier, enteredValue) => {
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: {value: enteredValue, isValid: true}
      }
    })
  }

  const submitHandler = () => {
    const expenseData = {
      amount: +parseFloat(inputValues.amount.value),
      date: new Date(inputValues.date.value),
      description: inputValues.description.value
    }
    const amouuntIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amouuntIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs({
        amount: {
          value: inputValues.amount.value,
          isValid: amouuntIsValid
        },
        date: {
          value: inputValues.date.value,
          isValid: dateIsValid
        },
        description: {
          value: inputValues.description.value,
          isValid: descriptionIsValid
        }
      })
      // Alert.alert('Invalid input', 'Please enter a valid amount, date and description', [{ text: 'Okay' }]);
      return;
    }
    onSubmit(expenseData);
  }

  const formIsValid = !inputValues.amount.isValid || !inputValues.date.isValid || !inputValues.description.isValid;

  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input label="Amount" 
          style={ styles.rowInput }
          invalid={!inputValues.amount.isValid}
          textInputConfig={{ 
            placeholder: "Enter amount",
            keyboardType: "decimal-pad",
            onChangeText: handleInputChange.bind(this, 'amount'),
            value: inputValues.amount.value
          }} 
        />
        <Input label="Date" 
          style={ styles.rowInput }
          invalid={!inputValues.date.isValid}
          textInputConfig={{ 
            placeholder: "Enter date YYYY-MM-DD",
            maxLength: 10,
            onChangeText: handleInputChange.bind(this, 'date'),
            value: inputValues.date.value
          }} 
        />
      </View>
      <Input label="Description" 
        invalid={!inputValues.description.isValid}
        textInputConfig={{ 
          placeholder: "Enter description",
          multiLine: true,
          numberOfLines: 4,
          // autoCorrect: false, // default is true
          onChangeText: handleInputChange.bind(this, 'description'),
          value: inputValues.description.value
        }} 
      />
      {
        formIsValid && <Text style={styles.errorMessage}>Please enter a valid amount, date and description</Text>
      }
      <View style={styles.buttonContainer}>
        <Button style={styles.buttonStyle} mode="flat" onPress={onCancel} >Cancel</Button>
        <Button style={styles.buttonStyle} onPress={submitHandler} >{isEditing ? 'Update': 'Add'}</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  formStyle: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
    marginVertical: 20,
    textAlign: 'center',

  },
  buttonContainer: {
   flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginHorizontal: 12,
    minWidth: 120,
  },
  errorMessage: {
    color: GloablStyles.colors.error500,
    marginBottom: 16,
    textAlign: 'center',
  }
})

export default ExpensesForm;