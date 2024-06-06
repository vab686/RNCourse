import { View, StyleSheet, Text, FlatList } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GloablStyles } from "../../constants/styles"

const DummyData = [
  { id: '1', discription: 'Food', amount: 100, date: new Date(2021, 6, 14)},
  { id: '2', discription: 'Clothes', amount: 200, date: new Date(2021, 6, 15)},
  { id: '3', discription: 'Rent', amount: 500, date: new Date(2021, 6, 16)},
  { id: '4', discription: 'Groceries', amount: 300, date: new Date(2021, 6, 17)},
  { id: '5', discription: 'Transport', amount: 150, date: new Date(2021, 6, 18)},
  { id: '6', discription: 'Entertainment', amount: 200, date: new Date(2021, 6, 19)},
  { id: '7', discription: 'Health', amount: 200, date: new Date(2021, 6, 20)},
  { id: '8', discription: 'Education', amount: 300, date: new Date(2021, 6, 21)},
  { id: '9', discription: 'Other', amount: 100, date: new Date(2021, 6, 22)},
  { id: '10', discription: 'Other', amount: 100, date: new Date(2021, 6, 23)},
]

function ExpensesOutput({ expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DummyData} periodName={expensesPeriod} />
      <ExpensesList expenses={DummyData} />
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
  }
})

export default ExpensesOutput