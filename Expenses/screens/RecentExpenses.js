import { View, Text } from 'react-native';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses() {
  return (
    <ExpensesOutput expensesPeriod="Recent" />
    // <View>
    //   <Text>Recent Expenses</Text>
    // </View>
  )
}

export default RecentExpenses;