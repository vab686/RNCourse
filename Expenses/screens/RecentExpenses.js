import { useContext } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function RecentExpenses() {
  const expencesCtx = useContext(ExpensesContext)
  const recentExpenses = expencesCtx.expenses.filter((expense) => {
    return expense.date > new Date(new Date().setDate(new Date().getDate() - 7));
  })
  return (
    <ExpensesOutput 
      expenses={recentExpenses} 
      expensesPeriod="Recent" 
      fallBackText='No recent expenses found in 7 Days. Maybe start adding some!'
    />
  )
}

export default RecentExpenses;