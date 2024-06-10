import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-6fc00-default-rtdb.firebaseio.com';

export async function storeExpenses(expenses) {
  const response= await axios.post(`${BACKEND_URL}/expenses.json`,  expenses)
  const id = response.data.name
  return id
}

export async function fetchExpenses() {
  const response= await axios.get(`${BACKEND_URL}/expenses.json`)
  const expenses = [];
  for (const key in response.data) {
    expenses.push({
      id: key,
      ...response.data[key]
    })
  }
  return expenses
}

export async function deleteExpenses(id) {
  await axios.delete(`${BACKEND_URL}/expenses/${id}.json`)
}

export async function updateExpenses(id, expenses) {
  await axios.patch(`${BACKEND_URL}/expenses/${id}.json`, expenses)
}