import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


import React, {useState} from 'react';
import ExpensesFilter from "./Filter/ExpensesFilter";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    let expensesContent = <p className="not-found">No expenses found</p>;




return (
    <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    </div>
);
};


export default Expenses;