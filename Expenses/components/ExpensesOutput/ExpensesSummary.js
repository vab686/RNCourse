import { View, Text, StyleSheet } from "react-native";

import { GloablStyles } from "../../constants/styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <View style={styles.container} >
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: GloablStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row'
  },
  period: {
    fontSize: 12,
    color: GloablStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GloablStyles.colors.primary500,
  }
})

export default ExpensesSummary;