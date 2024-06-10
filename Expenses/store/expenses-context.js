import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expense) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, expense) => {},
  setExpense: (expense) => {},
})

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    case 'UPDATE':
        const updatableExpenseIndex = state.findIndex(expense => expense.id === action.payload.id);
        const updatableExpenses = state[updatableExpenseIndex];
        const updateItem = {
          ...updatableExpenses,
          ...action.payload
        }
        const updatedExpenses = [...state];
        updatedExpenses[updatableExpenseIndex] = updateItem;
      return updatedExpenses //state.map(expense => expense.id === action.payload.id ? action.payload : expense);
    case 'SET':
      const invertedExpenses = action.payload.reverse();
      return invertedExpenses;
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpenseHandler = (expense) => {
    dispatch({ type: 'ADD', payload: expense });
  }

  const setExpenseHandler = (expense) => {
    dispatch({ type: 'SET', payload: expense });
  }

  const deleteExpenseHandler = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  }

  const updateExpenseHandler = (id, expense) => {
    dispatch({ type: 'UPDATE', payload: { id, ...expense } });
  }

  const context = {
    expenses: expensesState,
    addExpense: addExpenseHandler,
    deleteExpense: deleteExpenseHandler,
    updateExpense: updateExpenseHandler,
    setExpense: setExpenseHandler,
  }

  return (
    <ExpensesContext.Provider value={context}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;