import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from './UI/Card';
import styles from './css/CreateExpenseForm.module.css'

const CreateExpenseForm = ({ toggleForm, setExpenseListOnSubmit }) => {
    const [descriptionInput, setDescriptionInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');

    const setDescriptionOnChange = (e) => {
        setDescriptionInput(e.target.value);
    }

    const setAmountOnChange = (e) => {
        setAmountInput(e.target.value)
    }

    const setDateOnChange = (e) => {
        setDateInput(e.target.value)
    }

    const addExpenseOnSubmit = (e) => {
        e.preventDefault();

        const expense = {
            id: uuidv4(),
            description: descriptionInput,
            amount: amountInput,
            date: new Date(dateInput)
        }

        setExpenseListOnSubmit(expense);

        toggleForm()

        setDescriptionInput('')
        setAmountInput('')
        setDateInput('')
    }

    return (
        <Card
            className="bg-primary-white shadow-drop"
            cardContent={
                <form onSubmit={addExpenseOnSubmit}>
                    <div className={styles.form_control}>
                        <input
                            type="text"
                            value={descriptionInput}
                            placeholder="What expense do you want to add?"
                            onChange={setDescriptionOnChange}
                        />
                    </div>
                    <div className={styles.form_control}>
                        <input
                            type="text"
                            value={amountInput}
                            placeholder="$ 0,00"
                            onChange={setAmountOnChange}
                        />
                    </div>
                    <div className={styles.form_control}>
                        <input
                            type="date"
                            value={dateInput}
                            onChange={setDateOnChange}
                        />
                    </div>
                    <div className={styles.form_action}>
                        <button type="submit" className="btn shadow-drop">Add</button>
                        <button
                            type="button"
                            onClick={toggleForm}
                            className="btn btn-transparent mg-right-1">Cancel</button>
                    </div>
                </form >
            }
        />
    )
}

export default CreateExpenseForm;
