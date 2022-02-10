import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NavBar from './components/NavBar';
import Button from './components/UI/Button';
import ExpenseTable from './components/ExpenseTable';
// import ExpenseSum from './components/ExpenseSum';
import CreateExpenseForm from './components/CreateExpenseForm';
import styles from './App.module.css';

const expenses = [
    {
        id: uuidv4(),
        description: 'Adidas Tabular X',
        amount: 5000,
        date: new Date(2022, 1, 1)
    },
    {
        id: uuidv4(),
        description: 'Air Jordan Spizike',
        amount: 49999,
        date: new Date(2022, 1, 29)
    }
]

const App = () => {
    const [expenseForm, setExpenseForm] = useState(false)
    const [expenseList, setExpenseList] = useState(expenses)

    const toggleExpenseForm = () => {
        setExpenseForm((prevState) => !prevState)
    }

    const setExpenseListOnSubmit = (data) => {
        setExpenseList((prevState) => [data, ...prevState]);
    }

    return (
        <div className={styles.container}>
            <NavBar expenses={expenses} />
            {!expenseForm && (
                <Button
                    onClick={toggleExpenseForm}
                    className="mg-bottom-1"
                    buttonValue={'Add Expense'}
                />
            )}
            {expenseForm && (
                <CreateExpenseForm
                    setExpenseListOnSubmit={setExpenseListOnSubmit}
                    toggleForm={toggleExpenseForm}
                />
            )}
            {/* <ExpenseSum expenses={expenses} /> */}
            <ExpenseTable expenses={expenseList} />
        </div>
    )
}

export default App;
