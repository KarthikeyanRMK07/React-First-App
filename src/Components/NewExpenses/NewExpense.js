import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const getExpensesHandler = (data) => {
        const userExpenses = {
            ...data,
            id: Math.random().toString()
        }

        props.onGetExpensesData(userExpenses);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={getExpensesHandler} />
        </div>
    )
}


export default NewExpense;
