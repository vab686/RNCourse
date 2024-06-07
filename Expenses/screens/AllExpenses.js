import { useContext } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses() {
  const expencesCtx = useContext(ExpensesContext)
  return (
    <ExpensesOutput 
      expenses={expencesCtx.expenses} 
      expensesPeriod="Total" 
      fallBackText='No expenses found. Maybe start adding some!'
      />
  )
}

export default AllExpenses;