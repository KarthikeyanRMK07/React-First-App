import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({ title: "", amount: "", date: "" });

    const changeUserInputHandler = event => {
        const { name, value } = event.target;
        setUserInput(prevState => ({
            ...prevState,
            [name]: value

        }));
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        props.onSaveExpense(userInput);
        clearForm();
    }

    const clearForm = () => {
        setUserInput({ title: "", amount: "", date: "" })
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title" value={userInput.title} onChange={changeUserInputHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" name="amount" value={userInput.amount} min="0" max="20" onChange={changeUserInputHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" name="date" value={userInput.date} onChange={changeUserInputHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

}


export default ExpenseForm;