import { useLayoutEffect, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import IconButton from '../UI/IconButton';
import { GloablStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import ExpensesForm from '../components/ManageExpenses/ExpensesForm';
import { storeExpenses, updateExpenses, deleteExpenses } from '../util/http';
import LoadingOverlay from '../UI/LoadingOverlay';
import ErrorOverlay from '../UI/ErrorOverlay';

function ManageExpenses({route, navigation}) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const expencesCtx = useContext(ExpensesContext)
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const editedExpense = expencesCtx.expenses.find(expense => expense.id === editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing])

  deleteExpenseHandler = async () => {
    setIsLoading(true)
    try {
      expencesCtx.deleteExpense(editedExpenseId)
      await deleteExpenses(editedExpenseId)
      setIsLoading(false)
      navigation.goBack();
    } catch (error) {
      setError('Something went wrong. Please try again later.')
      setIsLoading(false)
    }
  }

  cancelHandler = () => {
    navigation.goBack();
  }

  confirmHandler = async (expenseData) => {
    setIsLoading(true)
    try {
      if (isEditing) {
        expencesCtx.updateExpense(editedExpenseId, expenseData)
        await updateExpenses(editedExpenseId, expenseData)
        setIsLoading(false)
      } else {
        const id = await storeExpenses(expenseData)
        expencesCtx.addExpense({...expenseData, id: id})
        setIsLoading(false)
      }
      navigation.goBack();
    } catch (error) {
      setError('Something went wrong. Please try again later.')
      setIsLoading(false)
    }
  }

  errorConfirmedHandler = () => {
    setError(null)
  }

  if (isLoading) {
    return <LoadingOverlay />
  }

  if (error) {
    return <ErrorOverlay message={error} onConfirm={errorConfirmedHandler} />
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