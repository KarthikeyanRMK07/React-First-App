import React, { useState } from 'react';
import ExpensesData from '../Util/ExpensesData';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import NewExpense from './NewExpenses/NewExpense';
import ExpenseFilter from './ExpenseFilter';

const Expenses = () => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const [expenses, setExpenses] = useState(ExpensesData);

    const expensesDataHandler = (expense) => {
        setExpenses((prevState) => {
            return [expense, ...prevState];
        })
    }

    const selectedYearHandler = (year) => {
        setFilteredYear(year);
        const filteredExpenses = expenses.filter(expense => {
            const fullYear = new Date(expense.date).getFullYear().toString();
            if (fullYear == year) {
                return expense;
            }
        });

    }


    return (
        <div className="expenses">
            <NewExpense onGetExpensesData={expensesDataHandler} />
            <ExpenseFilter year={filteredYear} onSelectedYear={selectedYearHandler} />
            {  expenses.map((expense, index) => (
                <ExpenseItem key={index} data={expense} />
            ))
            }
        </div>
    )
}


export default Expenses;