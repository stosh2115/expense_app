import {  View, StyleSheet, Text } from "react-native"


import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../Constants/styles";




function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {

    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (expenses.Length > 0) {
        content = <ExpensesList expenses={expenses} />;
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary  expenses={expenses} periodName={expensesPeriod} />
            {content}
            <ExpensesList  expenses={expenses} />
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

    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})