import ExpenseDate from "../ExpenseDate";
import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');




    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredDate('');
        setEnteredAmount('');
        setEnteredTitle('');

        activeStatus(false);

    }

    const [isActive,activeStatus] = useState(false);

    function  activateNewExpenseHandler(){
        activeStatus(true);
    }
    function  deactivateNewExpenseHandler(){
        activeStatus(false);
    }


    if(!isActive){
        return (<button onClick={activateNewExpenseHandler} className="new-expense__actions">Add new Expense</button>)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>TITLE</label>
                    <input type="text"  value={enteredTitle}  onChange={titleChangeHandler}   />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  value={enteredAmount} onChange={amountChangeHandler}  />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31"   value={enteredDate} onChange={dateChangeHandler}  />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={deactivateNewExpenseHandler} >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;