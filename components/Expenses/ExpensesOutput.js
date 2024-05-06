import {  View, StyleSheet } from "react-native"


import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../Constants/styles";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of jeans',
        amount: 89.99,
        date: new Date('2022-01-15')
    },
    {
        id: 'e3',
        description: 'Plants',
        amount: 79.99,
        date: new Date('2022-01-19')
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 20.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 20.99,
        date: new Date('2022-02-21')
    },
    
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e7',
        description: 'A pair of jeans',
        amount: 89.99,
        date: new Date('2022-01-15')
    },
    {
        id: 'e8',
        description: 'Plants',
        amount: 79.99,
        date: new Date('2022-01-19')
    },
    {
        id: 'e9',
        description: 'Book',
        amount: 20.99,
        date: new Date('2022-02-19')
    },
    
    
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary  expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList  expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 0,
        paddingTop: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
})