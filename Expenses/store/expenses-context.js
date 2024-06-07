import { createContext, useReducer } from "react";

const DummyData = [
  { id: '1', description: 'Food', amount: 100, date: new Date(2024, 6, 1)},
  { id: '2', description: 'Clothes', amount: 200, date: new Date(2024, 6, 2)},
  { id: '3', description: 'Rent', amount: 500, date: new Date(2024, 6, 3)},
  { id: '4', description: 'Groceries', amount: 300, date: new Date(2024, 6, 4)},
  { id: '5', description: 'Transport', amount: 150, date: new Date(2021, 6, 18)},
  { id: '6', description: 'Entertainment', amount: 200, date: new Date(2021, 6, 19)},
  { id: '7', description: 'Health', amount: 200, date: new Date(2021, 6, 20)},
  { id: '8', description: 'Education', amount: 300, date: new Date(2021, 6, 21)},
  { id: '9', description: 'Other', amount: 100, date: new Date(2021, 6, 22)},
  { id: '10', description: 'Other', amount: 100, date: new Date(2021, 6, 23)},
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expense) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, expense) => {},
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
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DummyData);

  const addExpenseHandler = (expense) => {
    expense.id = Math.floor((Math.random()*1000000)+1);
    dispatch({ type: 'ADD', payload: expense });
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
  }

  return (
    <ExpensesContext.Provider value={context}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;