import { View, StyleSheet, Text, FlatList } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GloablStyles } from "../../constants/styles"

function ExpensesOutput({ expenses, expensesPeriod, fallBackText}) {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 0,
    backgroundColor: GloablStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  }
})

export default ExpensesOutput