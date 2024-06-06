import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import IconButton from '../UI/IconButton';
import { GloablStyles } from '../constants/styles';
import Button from '../UI/Button';

function ManageExpenses({route, navigation}) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing])

  deleteExpenseHandler = () => {
    navigation.goBack();
  }

  cancelHandler = () => {
    navigation.goBack();
  }

  consfirmHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.buttonStyle} mode="flat" onPress={cancelHandler} >Cancel</Button>
        <Button style={styles.buttonStyle} onPress={consfirmHandler} >{isEditing ? 'Update': 'Add'}</Button>
      </View>
      {
        isEditing &&  
        <View style={styles.deleteContainer}>
          <IconButton icon='delete' color={ GloablStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundcolor: GloablStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GloablStyles.colors.primary200,
    alignItems: 'center',
  },
  buttonContainer: {
   flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginHorizontal: 12,
    minWidth: 120,
  }
})

export default ManageExpenses