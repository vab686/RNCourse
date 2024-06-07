import { useLayoutEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import IconButton from '../UI/IconButton';
import { GloablStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import ExpensesForm from '../components/ManageExpenses/ExpensesForm';

function ManageExpenses({route, navigation}) {
  const expencesCtx = useContext(ExpensesContext)
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const editedExpense = expencesCtx.expenses.find(expense => expense.id === editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing])

  deleteExpenseHandler = () => {
    expencesCtx.deleteExpense(editedExpenseId)
    navigation.goBack();
  }

  cancelHandler = () => {
    navigation.goBack();
  }

  confirmHandler = (expenseData) => {
    if (isEditing) {
      expencesCtx.updateExpense(editedExpenseId, expenseData)
    } else {
      expencesCtx.addExpense(expenseData)
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpensesForm 
        isEditing={isEditing} 
        onCancel={cancelHandler} 
        onSubmit={confirmHandler}
        initialData={editedExpense}
      />
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
  }
})

export default ManageExpenses