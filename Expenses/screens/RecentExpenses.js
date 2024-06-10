import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { fetchExpenses } from '../util/http';
import LoadingOverlay from '../UI/LoadingOverlay';
import ErrorOverlay from '../UI/ErrorOverlay';

function RecentExpenses() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const expencesCtx = useContext(ExpensesContext)

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true)
      
      try {
        const expences = await fetchExpenses()
        expencesCtx.setExpense(expences)
      }catch (error) {
        setError('Something went wrong. Please try again later.')
        setIsLoading(false)
        return
      }
      setIsLoading(false)
    }
    getExpenses()
  }, [])

  const errorConfirmedHandler = () => {
    setError(null)
  }

  const recentExpenses = expencesCtx.expenses.filter((expense) => {
    return new Date(expense.date) > new Date(new Date().setDate(new Date().getDate() - 7));
  })

  if (isLoading) {
    return <LoadingOverlay />
  }

  if (error) {
    return <ErrorOverlay message={error} onConfirm={errorConfirmedHandler} />
  }

  return (
    <ExpensesOutput 
      expenses={recentExpenses} 
      expensesPeriod="Recent" 
      fallBackText='No recent expenses found in 7 Days. Maybe start adding some!'
    />
  )
}

export default RecentExpenses;