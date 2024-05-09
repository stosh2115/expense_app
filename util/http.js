import axios from "axios";


export function storeExpense(expenseData) {
    axios.post(
        'https://expense-app-react-native-c0d1c-default-rtdb.firebaseio.com/expenses.json',
        expenseData
    );
}