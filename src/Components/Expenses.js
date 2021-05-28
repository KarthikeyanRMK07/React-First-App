import ExpensesData from '../Util/ExpensesData';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import NewExpense from './NewExpenses/NewExpense';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = () => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const expenses = ExpensesData;

    const expensesDataHandler = (data) => {
        console.log(data);
    }

    const selectedYearHandler = (year) => {
       setFilteredYear(year);
    }


    return (
        <div className="expenses">
            <NewExpense onGetExpensesData={expensesDataHandler} />
            <ExpenseFilter year={filteredYear}  onSelectedYear={selectedYearHandler} />
            {  expenses.map((expense, index) => (
                <ExpenseItem key={index} data={expense} />
            ))
            }
        </div>
    )
}


export default Expenses;