import ExpensesData from '../Util/ExpensesData';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';

const Expenses = () => {
    const expenses = ExpensesData;
    console.log(expenses);
    return (
        <div className="expenses">
            {  expenses.map((expense,index) => (
                <ExpenseItem key={index} data={expense} />
            ))
            }
        </div>
    )
}


export default Expenses;